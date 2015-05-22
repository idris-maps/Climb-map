var d3 = require('d3');

var elevGraph = require('./elevGraph.js');
var drawMap = require('./drawMap.js');
var calcTotal = require('./calcTotal.js');

module.exports = function() {
	var graphW = d3.select('#graph').node().getBoundingClientRect().width;
	var graphH = graphW * 0.45;
	var mapH = graphW * 0.6;
	d3.select('#graph').style('height', graphH + 'px');
	d3.select('#map').style('height', mapH + 'px');

	calcTotal(data);
	drawMap('map', data);
	elevGraph('graph', data);
}
