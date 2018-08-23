function page3(){
background(23,106,102);
var dat = ([32.472, 34.97],[32.472, 34.94]);
  tomtom.setProductInfo('<your-product-name>', '<your-product-version>');
  var map = tomtom.map('map', {
      key: 'uAk6oxtIqT9iQAPMsbtJFPsGg9O2akW6',
      center: [32.471, 34.97],
      zoom: 14,
      style: 'main',


  });
  tomtom.L.circle([32.472, 34.97], 80, {
      color: 'green',
      fillColor: '#39ff14',
      fillOpacity: 0.45,
      title: '90'
  }).addTo(map);

  tomtom.L.circle([32.472, 34.94], 50, {
      color: 'red',
      fillColor: '#39ff24',
      fillOpacity: 0.35,
      title: '90'
  }).addTo(map);




// e.latlng.toString()//original
  map.on('click', function(e) {
      tomtom.L.popup().setLatLng(e.latlng).setContent("hello").openOn(map);
  });
  // show an informational popup
  tomtom.L.popup().setLatLng([32.471, 34.97])
      .setContent('Click anywhere on the map to lookup the clicked lat lon.').openOn(map);


}
