function initMap() {
  console.log('Google map loaded');

  // var locations = [
  // {
  //   title: 'Boathouse Restaurant',
  //   description: 'a restaurant without houses or boats',
  //   img: 'tbd',
  //   lat: 49.2742939,
  //   long: -123.1558585
  // },
  // {
  //   title: 'Fable Kitchen',
  //   description: 'farm to table snacks',
  //   img: 'tbd',
  //   lat: 49.2679601,
  //   long: -123.1511973,
  // },
  // {
  //   title: 'Le Crocodile',
  //   description: 'reptiles for dinner',
  //   img: 'tbd',
  //   lat: 49.2812985,
  //   long: -123.132692,
  // }
  // ];

  var realPoints = document.getElementsByClassName('test');
  var realRealPoints = JSON.parse(realPoints['0'].textContents);
  console.log(realRealPoints);
  var locations = realRealPoints;

  console.log("locations is of type ",typeof locations);

  window.map = new google.maps.Map(document.getElementById('map'), {
      mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var bounds = new google.maps.LatLngBounds();

  var marker, i, infoWindowContent;

  function addDataPoints (locations) {
    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i].lat, locations[i].long),
          //label: 'i',
        map: map
      });

      bounds.extend(marker.position);

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          //sets content of info window to first object of marker array, e.g 'Boathouse Rest'
          infoWindowContent = (locations[i].title +locations[i].description + locations[i].img);
          infowindow.setContent(infoWindowContent);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  }

  addDataPoints(locations);


  map.fitBounds(bounds);
};
