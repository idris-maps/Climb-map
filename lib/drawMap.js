var L = require('leaflet');
var d3 = require('d3');

var mouse = require('./mouse.js');

module.exports = function(el, data) {
	map = L.map('map').setView([46.2,6.2],10);
	var geojson = L.geoJson(data.features);
	map.fitBounds(geojson.getBounds());

	L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
		maxZoom: 18,
		opacity: 0.5,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	for(i=0;i<data.features.length;i++) {
		data.features[i].properties.style = 'stroke:' + color.main + '; stroke-width: 3px;';
	}

	var svg = d3.select(map.getPanes().overlayPane).append('svg');
	var g = svg.append('g')
		.attr('class', 'leaflet-zoom-hide');

	var transform = d3.geo.transform({point: projectPoint});
	var path = d3.geo.path().projection(transform);

	var feature = g.selectAll("path")
		.data(data.features)
		.enter().append("path")
		.attr('id', function(d) { return 'map-' + d.properties.id; });

	feature.on('mouseover', function(e) {
		var id = e.properties.id;
		mouse.over(id, 'map')
	})
	feature.on('mouseout', function(e) {
		var id = e.properties.id;
		mouse.out(id, 'map')		
	})
	map.on("viewreset", reset);
	reset();


	function reset() {
		var bounds = path.bounds(data);
		var topLeft = bounds[0];
		var bottomRight = bounds[1];

		svg.attr("width", bottomRight[0] - topLeft[0])
			.attr("height", bottomRight[1] - topLeft[1])
			.style("left", topLeft[0] + "px")
			.style("top", topLeft[1] + "px");

		g.attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");

		feature.attr({
			'd':  path,
			style: function(d) { return d.properties.style }
		})
	}

	function projectPoint(x, y) {
		var point = map.latLngToLayerPoint(new L.LatLng(y, x));
		this.stream.point(point.x, point.y);
	}

}

