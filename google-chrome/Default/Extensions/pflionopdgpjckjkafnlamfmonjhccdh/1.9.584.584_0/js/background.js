/**
 * Listens for the app launching then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function(launchData) {
	var connectedBLEDevices = {};

    const MENU_HEIGHT = (window.screen.height - window.screen.availHeight);

    function getScreenAspectRatio() {
        return 4/3;//window.screen.width / window.screen.height;
	}

    function getHeight() {
        const preferredHeight = 768;

        return Math.min(preferredHeight, window.screen.availHeight);
    }

    function getMinHeight() {
        const screenHeightMin = Math.round(window.screen.height / 2);
        const availScreenHeightMin = Math.round((window.screen.availHeight * 2) / 3);
        const minHeight = Math.max(availScreenHeightMin, screenHeightMin); //Don't allow less than 540px height (2/3*768)

		console.log('Window minimum height: [ screenHeightMin: ' + screenHeightMin + ', availScreenHeightMin: ' + availScreenHeightMin + '] =>  ' + minHeight);
        return minHeight;
    }

    function getWidth() {
        const preferredWidth = 1024;
        return Math.min(preferredWidth, window.screen.availWidth);
	}

    function getMinWidth() {
        const minHeight = getMinHeight();
        const screenAspectRatio = getScreenAspectRatio();
        const widthByAspect = Math.round(minHeight * screenAspectRatio);
        const minWidth = Math.min(window.screen.availWidth, widthByAspect);

        console.log('Window minimum width: [ window.screen.availWidth: ' + window.screen.availWidth + ', widthByHeightAspect (minHeight: ' + minHeight + ' * screenAspectRatio: ' + screenAspectRatio + ') = ' + widthByAspect + ' => windowMinWidth: ' + minWidth);
        return minWidth;
	}

	chrome.app.window.create(
		'index.html', {
			id: 'mainWindow',
			innerBounds: {
				height: getHeight(),
				width: getWidth(),
				minWidth: getMinWidth(),
				minHeight: getMinHeight()
			}
		}, (createdWindow) => {
			createdWindow.onClosed.addListener(() => {
				console.debug('Window closed. Cleaning up connected devices: ', connectedBLEDevices);
				for (var property in connectedBLEDevices) {
					if (connectedBLEDevices.hasOwnProperty(property)) {
						chrome.bluetoothLowEnergy.disconnect(connectedBLEDevices[property]);
					}
				}
			});

			createdWindow.contentWindow.backgroundPage = {
				addDeviceAddress : function(macaddress) {
					console.debug('backgroundPage addDeviceAddress', macaddress);
					connectedBLEDevices[macaddress.replace(/[:]/g, '')] = macaddress;
				},
				removeDeviceAddress : function(macaddress) {
					console.debug('backgroundPage removeDeviceAddress', macaddress);
					delete connectedBLEDevices[macaddress.replace(/[:]/g, '')];
				}
			};
		}
	);
});