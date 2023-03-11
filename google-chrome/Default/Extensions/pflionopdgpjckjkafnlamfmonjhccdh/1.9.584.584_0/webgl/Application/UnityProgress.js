function UnityProgress(gameInstance, progress) {

	this.SetProgress = function (progress) {
		if ( unity && unity.Splashscreen ) {
			unity.Splashscreen.updateProgress(progress);
		} else {
			console.warn("UnityProgress - unity.Splashscreen is not defined - unable to invoke unity.Splashscreen.updateProgress");
		}
	}

	this.SetMessage = function (message) { 
	}

	this.Clear = function() {
	}

	this.Update = function() {
	}

	this.Update();

	if (!gameInstance.Module) {
		console.warn("gameInstance Module not defined");
		return;
	}

	if (progress === 'complete') {
		if ( unity && unity.Splashscreen ) {
			unity.Splashscreen.updateProgress(1.0);
			unity.Splashscreen.unityDoneLoading();
		} else {
			console.warn("UnityProgress - unity.Splashscreen is NOT defined - unable to invoke unity.Splashscreen.unityDoneLoading()");
		}
	} else {
		this.SetProgress(progress);
	}

}