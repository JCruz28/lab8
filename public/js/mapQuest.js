function initMap() {
	// add your code here
	L.mapquest.key = 'GlAFJFjkMAjp5U63MVFmC3ZyWnBR3cGG';

	var map = L.mapquest.map('map', {
		center: [32.878713, -117.236202],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.878713, -117.236202]).addTo(map);
}