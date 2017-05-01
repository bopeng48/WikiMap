var marker;
var infowindow;
var messagewindow;
var map;

function ajaxCall(method, url, data, dataType) {
   return $.ajax({
     method,
     url,
     data,
     dataType,
   });
 }

 function clearData () {
   document.getElementById('name').val('');
 }

function initNewMap() {

  var geocoder = new google.maps.Geocoder();
  map = new google.maps.Map(document.getElementById('map'), {});

  var placeId = document.getElementsByClassName('test');
  var placeIdString = placeId['0'].textContent;
  geocoder.geocode({ placeId: placeIdString.slice(1) }, (results, status) => {
    if (results[0]) {
      map.fitBounds(results[0].geometry.viewport);
      map.setCenter(results[0].geometry.location);
    }
  });

  infowindow = new google.maps.InfoWindow({
    content: document.getElementById('form')
  });

  messagewindow = new google.maps.InfoWindow({
    content: document.getElementById('message')
  });

  google.maps.event.addListener(map, 'click', (event) => {
    console.log('from within google.map.event.addListener.map');
    marker = new google.maps.Marker({
      position: event.latLng,
      map: map
    });

  google.maps.event.addListener(marker, 'click', () => {
    console.log('from within google.maps.event.addListener.marker');
    infowindow.open(map, marker);
    });
  });
}

function saveData() {
  var name = escape(document.getElementById('name').value);
  var description = escape(document.getElementById('description').value);
  // var image = document.getElementById('image').value;
  var latlng = marker.getPosition();

  var dat = { title: name,
    description,
    img: 'path/1',
    map_id: 1,
    lat: latlng.lat(),
    long: latlng.lng(),
    user_id: 1 };

  infowindow.close();
  messagewindow.open(map, marker);

ajaxCall('POST', '/maps/:map_id/points', dat);
}
