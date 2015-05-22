exports.mapPage = 
	'<div class="col-md-5">' +
		'<p id="total">Total distance: ' +
			'<span id="totalDist"></span>km - climb: ' +
			'<span id="totalClimb"></span>m' +
		'</p>' +
		'<div id="graph"></div>' +
		'<div id="info">' +
			'<p id="infoP" style="display:none;">Distance from start: ' +
				'<span id="infoDist">...</span>km - elevation: ' +
				'<span id="infoElev">...</span>% - height: ' +
				'<span id="infoHeight">...</span>m' +
			'</p>' +
		'</div>' +
	'</div>' +
	'<div id="map" class="col-md-7"></div>';

exports.inputPage = 
	'<div class="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1">' +
		'<h2>Upload a GPX file</h2>' +
		'<input type="file" id="input">' +
	'</div>' +
	'<div class="col-md-12">' +	
		'<div class="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1">' +
			'<h3>What is a GPX file?</h3>' +
			'<p>It is the most common file format created by GPS trackers.<br/>For more info: <a href="http://en.wikipedia.org/wiki/GPS_Exchange_Format">wikipedia</a></p>' +
			'<h3>I have another file type</h3>' +
			'<p>GPS trackers often come with software that lets you convert whatever you have to GPX. If not, there are online converters such as <a href="http://www.gpsies.com/convert.do">GPSies</a> (not related to Idris)</p>' +
			'<h3>My GPS tracker does not record elevation data</h3>' +
			'<p>That makes it diffcult to show your climbs. There are online tools for that too, check out <a href="http://www.gpsvisualizer.com/elevation">this one</a> for example (again not related to Idris)</p>'		
		'</div>' +
	'</div>';

exports.onConverted = 
	'<div class="col-md-6 col-md-offset-3 center">' +
		'<a id="dlBtn"><button class="btn btn-red">Download as geojson</button></a>' +
		'<a id="viewBtn"><button class="btn btn-red" style="margin-left: 5px;">View your ride</button></a>' +
	'</div>';


