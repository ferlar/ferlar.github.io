function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 41.532848, lng: -8.419328},
    zoom: 16,
    scrollwheel: false,
    draggable: false
  });
  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(41.532848, -8.419328),
    map: map,
    icon: iconBase + 'schools_maps.png'
  });
  var contentString = '<div id="container">'+
                        '<h5>Ferlar</h5>'+
                        '<p><b>Morada</b></p>' +
                        '<p>Avenida Barros e Soares, Nogueira </p>' +
                         '<p>Braga - 4710-214</p>' +
                        '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 250
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

}
