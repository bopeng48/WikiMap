function initMap() {

  let url = `${window.location.pathname}/json`;

  fetch(url).then(res => res.json()).then((locations) => {
    window.map = new google.maps.Map(document.getElementById('map'), {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });

    let infowindow = new google.maps.InfoWindow();

    let bounds = new google.maps.LatLngBounds();

    let marker, i, infoWindowContent;

    function addDataPoints(locations) {
      for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i].lat, locations[i].long),
          map,
        });

        bounds.extend(marker.position);

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
          return function () {
            infoWindowContent = (locations[i].title +" - "+ locations[i].description);
            infowindow.setContent(infoWindowContent);
            infowindow.open(map, marker);
          };
        }(marker, i)));
      }
    }

    addDataPoints(locations);

    map.fitBounds(bounds);
  });
}
