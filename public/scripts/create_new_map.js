let marker;

function initNewMap() {
  var infowindow;
  var messagewindow;
  var geocoder = new google.maps.Geocoder();


  var map = new google.maps.Map(document.getElementById('map'), {
          // zoom: 8,
          // center: {lat: 40.72, lng: -73.96}
  });

  var placeId = document.getElementsByClassName('test');
  var placeIdString = placeId['0'].textContent;
  geocoder.geocode({ placeId: placeIdString.slice(1) }, (results, status) => {
    if (results[0]) {
      map.setZoom(13); // to be changed to automatic zoom...somehow
      map.setCenter(results[0].geometry.location);
    }
  });

  infowindow = new google.maps.InfoWindow({
    content: document.getElementById('form'),
  });

  messagewindow = new google.maps.InfoWindow({
    content: document.getElementById('message'),
  });

  google.maps.event.addListener(map, 'click', (event) => {
    console.log('from within google.map.event.addListener.map');
    marker = new google.maps.Marker({
      position: event.latLng,
      map,
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

  console.log(dat);
  $.ajax({
    url: '/maps/:map_id/points',
    method: 'POST',
    data: dat,
    success() {
       () => { console.log('ajax works!!'); };
     },
  });
}

