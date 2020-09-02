// Called when the user clicks on the browser action.


chrome.browserAction.onClicked.addListener(function(tab) {

	chrome.tabs.executeScript({
		code: `
			document.body.contentEditable = 'true'; 
			document.designMode='on'; 
			console.log('Edit mode active. Reload the page to deactivate and reset.'); 
			alert('You are now in Edit Mode. Reload the page to reset it.')
		`
	});
});