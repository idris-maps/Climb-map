var d3 = require('d3');
var mouse = require('./mouse.js');


module.exports = function(el, data) {
	var color = {
		light: '#eff3ff',
		normal: window.color.main,
		dark: window.color.focus,
	}

	var h = d3.select('#' + el).node().getBoundingClientRect().height;
	var w = d3.select('#' + el).node().getBoundingClientRect().width;
	if(h>w) { var margin = w / 10; } else { var margin = h / 10; }

	var svg = d3.select('#' + el).append('svg')
		.attr({
			width: w,
			height: h
		});

	var chart = svg.append('g').attr({
		id: 'chart',
		width: w - margin * 2,
		height: h - margin * 2,
		transform: 'translate(' + margin + ',' + margin + ')'
	});

	drawChart(data, 'g#chart', color);
}

function drawChart(json, el, color) {

		var data = [];
		for(i=0;i<json.features.length;i++) {
			if(i !=0) {
				data.push({ 
					a: json.features[i - 1].properties,
					b: json.features[i].properties
				})
			}
		}

		var elW = d3.select(el).attr('width'); 
		var elH = d3.select(el).attr('height'); 
		var wScale = d3.scale.linear()
			.domain([
				d3.min(data, function(d) { return d.b.dist }),
				d3.max(data, function(d) { return d.b.dist })
			])
			.range([0, elW])
		var hScale = d3.scale.linear()
			.domain([
				d3.min(data, function(d) { return d.b.elev }),
				d3.max(data, function(d) { return d.b.elev })
			])
			.range([elH - 10, 0])

		d3.select(el).selectAll('polygon')
			.data(data)
			.enter()
			.append('polygon')
			.attr({
				id: function(d) { return 'graph-' + d.a.id; },
				points: function(d) { 
					var pts = wScale(d.a.dist) + ',' + hScale(d.a.elev) + ' ' + 
						wScale(d.b.dist) + ',' + hScale(d.b.elev) + ' ' +
						wScale(d.b.dist) + ',' + elH + ' ' +  
						wScale(d.a.dist) + ',' + elH;
					return pts; 
				}, 
				style: 'fill:' + color.normal + ';stroke:' + color.normal + ';stroke-width:1'
			})
			.on('mouseover', function(d) {
/*
				var txt = d.a.elev; 
				d3.select(this).attr('style', 'fill:' + color.dark + ';stroke:' + color.dark + ';stroke-width:1');
				var x = d3.mouse(this)[0];
				var y = d3.mouse(this)[1] - 15;
				d3.select('#tooltip')
					.attr({
						transform: 'translate(' + x + ',' + y + ')'
					});
				d3.select('#tooltext').text(txt);
*/
				mouse.over(d.a.id, 'graph')
			})
			.on('mouseout', function(d) {
/*
				d3.select(this).attr('style', 'fill:' + color.normal + ';stroke:' + color.normal + ';stroke-width:1');
				d3.select('#tooltip')
					.attr({
						transform: 'translate(-100,-100)'
					})
*/
				mouse.out(d.a.id, 'graph')
			})
	
}


