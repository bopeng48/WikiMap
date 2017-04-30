function initNewMap() {

var marker;
var infowindow;
var messagewindow;
var geocoder = new google.maps.Geocoder;


var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: 40.72, lng: -73.96}
      });

  var placeId = document.getElementsByClassName('test');
  var placeIdString = placeId['0'].textContent;
  geocoder.geocode({'placeId': placeIdString.slice(1)}, function(results, status) {
      if (results[0]) {
        map.setZoom(13); // to be changed to automatic zoom...somehow
        map.setCenter(results[0].geometry.location);  
      };  
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
  


