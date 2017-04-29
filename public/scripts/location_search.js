// module.exports = {

// ran: function() { function location_search () {
//   var input = document.getElementById('locationName');
//   var autocomplete = new google.maps.places.Autocomplete(input);

//   autocomplete.addListener('place_changed', function() {
//           var place = autocomplete.getPlace();
//           console.log('ive got a place', place.place_id);
//   });
//   google.maps.event.addDomListener(window, 'load', location_search);
//   return place;
// }}
// };




function location_search () {
  var input = document.getElementById('locationName');
  var autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.addListener('place_changed', function() {
          var place = autocomplete.getPlace();
          console.log('ive got a place', place.place_id);
          document.getElementById('placeId').value = place.place_id;
  });
};

google.maps.event.addDomListener(window, 'load', location_search);


