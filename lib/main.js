var widgets = require('sdk/widget');
var tabs = require('sdk/tabs');
var self = require('sdk/self');

var widget = widgets.Widget(
{
	id: 'pause-all-youtubes',
	label: 'Pause all YouTube videos',
	contentURL: self.data.url('pause.png'),
	contentScriptFile: self.data.url('handler.js')
});

widget.port.on('left-click', function() 
{
    for each (var tab in tabs)
    {
	    if ((tab.url.startsWith('http://www.youtube.com/')) || (tab.url.startsWith('https://www.youtube.com/')))
	    {
		    tab.attach(
		    {
			    contentScript: "try { document.getElementById('movie_player').wrappedJSObject.pauseVideo(); } catch (ex) { }"
		    });
	    }
    }
});

