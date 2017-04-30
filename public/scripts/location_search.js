
function location_search() {
  const input = document.getElementById('locationName');
  const autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace();
    console.log('ive got a place', place);
    document.getElementById('placeId').value = place.place_id;
  });
}

google.maps.event.addDomListener(window, 'load', location_search);

