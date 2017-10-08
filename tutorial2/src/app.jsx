var React = require('react');
var ReactDOM = require('react-dom');
var ThumbnailList = require('./thumbnail_list.jsx');

var data = {
	thumbnailData: [
			{
			title: "Moon",
			description: "The Moon is an astronomical body that orbits planet Earth, being Earth's only permanent natural satellite. Following Jupiter's satellite Io, the Moon is second-densest satellite among those whose densities are known.",
			imgURL: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Earths_Moon.svg",
			btnText: "Being a Moon Man",
			btnURL: "https://en.wikipedia.org/wiki/Moon",
		},
		{
			title: "Saturn",
			description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.",
			imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Saturn_01.svg/2000px-Saturn_01.svg.png",
			btnText: "Life in Saturn",
			btnURL: "https://en.wikipedia.org/wiki/Saturn",
		},
		{
			title: "Sun",
			description: "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process.",
			imgURL: "http://www.freepngimg.com/download/sun/5-2-sun-png-hd.png",
			btnText: "Burning in the Sun",
			btnURL: "https://en.wikipedia.org/wiki/Sun",
		}
	]
}

var container = React.createElement(ThumbnailList, data);
React.render(container, document.querySelector('#app'));