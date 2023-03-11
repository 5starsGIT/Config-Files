var cachedBuffer = [];
var oldSoundLevel;

onmessage = function(e){
  switch(e.data.command){
    case "init":
      	init(e.data.config);
      break;
    case "record":
      	record(e.data.buffer);
      break;
    case "getVolume":
		getVolume();
      break;
  }
};

function init(config){
}

function record(buffer){
  cachedBuffer.push(buffer[0]);
}

function getVolume()
{
	var clipVolume = Number.MIN_VALUE;
	for (var i = 0; i < cachedBuffer.length; i++)
	{
		var cachedSample = cachedBuffer[i];
		for(var j = 0; j < cachedBuffer.length; j++)
		{
			var thisNum = cachedSample[j];
			if (thisNum > clipVolume)
			{
				clipVolume = thisNum;
			}
		}
	}
	cachedBuffer = [];
	var newSoundLevel = getSoundLevel(clipVolume);
	if (oldSoundLevel !== newSoundLevel) {
        //console.debug(`AudioWorker - Updating audio volume. Previous sound level: '${oldSoundLevel}' - new level: '${newSoundLevel}'`);
        oldSoundLevel = newSoundLevel;
        postMessage({
                command: "volume",
                volume: clipVolume
            }
        );
    }
}

/**
 * This function is a helper that calculates the sound level that the getVolume value ends up being shown as in the UI
  * @param clipVolume
 * @return {number}
 */
function getSoundLevel(clipVolume) {
    var powerDb = 20 * Math.log10(parseFloat(clipVolume));
    var soundLevelStep = 0;

    if (powerDb > -60) soundLevelStep = 1;
    if (powerDb > -57) soundLevelStep = 2;
    if (powerDb > -47) soundLevelStep = 3;
    if (powerDb > -38) soundLevelStep = 4;
    if (powerDb > -30) soundLevelStep = 5;
    if (powerDb > -23) soundLevelStep = 6;
    if (powerDb > -17) soundLevelStep = 7;
    if (powerDb > -12) soundLevelStep = 8;
    if (powerDb > -08) soundLevelStep = 9;
    if (powerDb > -05) soundLevelStep = 10;

    return soundLevelStep;
}
