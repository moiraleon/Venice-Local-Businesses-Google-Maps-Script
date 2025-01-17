function initMap() {
    // Define the coordinates for the center of the city (e.g., Venice, Italy)
    const cityCenter = { lat: 45.4343363, lng: 12.3387844 };
  
    // Create a map centered on the city
    const map = new google.maps.Map(document.getElementById('map'), {
      center: cityCenter,
      zoom: 13,
    });
  
    // Create a PlacesService instance
    const service = new google.maps.places.PlacesService(map);
  
    // Define the request parameters
    const request = {
      location: cityCenter,
      radius: '5000', // Search within a 5 km radius
      type: 'school', // Change this to the desired business type
    };
  
    // Perform a nearby search
    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          const place = results[i];
          // Create a marker for each place
          new google.maps.Marker({
            map,
            position: place.geometry.location,
            title: place.name,
          });
        }
      } else {
        console.error('PlacesService was not successful due to: ' + status);
      }
    });
  }
  
  // Expose initMap globally for Google Maps API callback
  window.initMap = initMap;
  