var d3 = require('d3');

exports.over = function(id, origin) {
	var f;
	if(id != undefined) {
		for(i=0;i<data.features.length;i++) {
			if(data.features[i].properties.id == id) {
				f = data.features[i];
				break;
			}
		}
	}
	d3.select('#infoP').attr('style', 'display:block')
	d3.select('#infoDist').text(f.properties.dist / 1000);
	d3.select('#infoElev').text(f.properties.pcElev);
	d3.select('#infoHeight').text(f.properties.elev);

	var graphPolyId = 'polygon#graph-' + id;
	d3.select(graphPolyId).attr('style', 'fill:' + color.focus + ';stroke:' + color.focus + ';stroke-width:2');
	var pathMapId = 'path#map-' + id;
	d3.select(pathMapId).attr('style', 'stroke:' + color.focus + '; stroke-width: 5px;');
	
	if(origin == 'graph') {


		var lat1 = f.geometry.coordinates[0][1];
		var lat2 = f.geometry.coordinates[1][1];
		var lng1 = f.geometry.coordinates[0][0];
		var lng2 = f.geometry.coordinates[1][0];
		
		var lat = (lat1 + lat2) / 2;
		var lng = (lng1 + lng2) / 2;
		map.setView([lat, lng], 14);
	}
} 

exports.out = function(id, origin) {
	d3.select('#infoP').attr('style', 'display:none')
	var graphPolyId = 'polygon#graph-' + id;
	d3.select(graphPolyId).attr('style', 'fill:' + color.main + ';stroke:' + color.main + ';stroke-width:2');
	var pathMapId = 'path#map-' + id;
	d3.select(pathMapId).attr('style', 'stroke:' + color.main + '; stroke-width: 3px;');	
}
