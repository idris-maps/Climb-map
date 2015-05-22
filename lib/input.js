var d3 = require('d3');
var convert = require('./convert.js');
var view = require('./views.js');
var mapPage = require('./mapPage.js');

module.exports = function(e) {
	var geojson;
	var fileList = this.files;
	var reader = new FileReader();
	reader.onload = (function(tf) {
		return function(e) { 

			var gpx = e.target.result;
			geojson = convert(gpx, 100);

		}
	})(fileList[0]);
	reader.readAsText(fileList[0]);
	reader.onloadend = function() { 
		data = geojson;
		download();
		console.log('done');
	}
}

function download() {
	var json = JSON.stringify(data);
	var blob = new Blob([json], {type: "application/json"});
	var url  = URL.createObjectURL(blob);

	document.getElementById('content').innerHTML = view.onConverted;
	var dlBtn = document.getElementById('dlBtn');
	dlBtn.setAttribute('download', Date.now() + 'geodata.json');
	dlBtn.setAttribute('href', url);
	d3.select('#viewBtn').on('click', function() {
		document.getElementById('content').innerHTML = view.mapPage;
		mapPage();
	});

}


