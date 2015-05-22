module.exports = function(geojson) {
	var climb = 0;
	for(i=0;i<geojson.features.length;i++) {
		if(i != 0) {
			var elev1 = geojson.features[i - 1].properties.elev;
			var elev2 = geojson.features[i].properties.elev;
			var elev = elev2 - elev1;
			if(elev > 0) { climb = climb + elev;}
		}
	}
	var dist = geojson.features[geojson.features.length - 1].properties.dist / 1000;
	d3.select('#totalDist').text(dist);
	d3.select('#totalClimb').text(climb)
}
