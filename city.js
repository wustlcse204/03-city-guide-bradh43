// JavaScript for Brad Hodkinson's city website

// JavaScript for creating the google map feature, looked up guide on W3Schools
// Initialize and add the map
function initMap() {
  // The lattitude and longitude location of Snohomish
  var snohomish = {lat: 47.9129, lng: -122.0982};
  // The map, centered at Snohomish
  var map = new google.maps.Map(
    document.getElementById('google-map'), {zoom: 14, center: snohomish});
  // The marker, positioned at Snohomish
  var marker = new google.maps.Marker({position: snohomish, map: map});
}
