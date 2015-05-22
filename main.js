var view = require('./lib/views.js');
var input = require('./lib/input.js');

window.color = {
	main: '#6CAB7F',
	focus: '#B24F3F'
}

window.map;
window.data = {};

var content = document.getElementById('content');
content.innerHTML = view.inputPage;
var inputEl = document.getElementById('input');
inputEl.addEventListener('change', input, false);


