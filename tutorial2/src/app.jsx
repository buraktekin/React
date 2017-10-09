var React = require('react');
var Dropdown = require('./dropdown');

var	options = {
	placeholder: 'Choose',
	items: [
		'Sun',
		'Mercury',
		'Venus',
		'Earth',
		'Mars',
		'Jupiter',
		'Saturn',
		'Uranus',
		'Neptun'
	]
}

var container = React.createElement(Dropdown, options);
React.render(container, document.querySelector('#app'));