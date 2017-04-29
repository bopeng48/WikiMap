function initNewMap() {

var marker;
var infowindow;
var messagewindow;

var startLocation = {lat: 49.282293, lng: -123.105372};
var startZoom = 13;

function createMap (startLocation, startZoom) {
  console.log('Google map created');

  window.map = new google.maps.Map(document.getElementById('map'), {
    center: startLocation,
    zoom: 13
  });

  infowindow = new google.maps.InfoWindow({
    content: document.getElementById('form')
  });

  messagewindow = new google.maps.InfoWindow({
    content: document.getElementById('message')
  });

  google.maps.event.addListener(map, 'click', function(event) {
    marker = new google.maps.Marker({
      position: event.latLng,
      map: map
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });
  });
}

createMap(startLocation);

function saveData() {
  var name = escape(document.getElementById('name').value);
  var description = escape(document.getElementById('description').value);
  //var image = document.getElementById('image').value;
  var latlng = marker.getPosition();
  var url = 'name=' + name + '&description=' + description +
            '&type=' + 'image' + '&lat=' + latlng.lat() + '&lng=' + latlng.lng();
  console.log(url);
  //  $.ajax({
  //   url: '/tweets/maps/:map_id/points',
  //   method: 'POST',
  //   data: $(this).serialize(),
  //   success() {
  //     loadPoints();
  //   },
  // });  
};

};
  


