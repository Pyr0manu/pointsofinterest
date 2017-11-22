function initAutocomplete() {



  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13,
    mapTypeId: 'roadmap'
  });



// Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  // var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // // Clear out the old markers.
    // markers.forEach(function(marker) {
    //   marker.setMap(null);
    // });
    // markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // // Create a marker for each place.
      // markers.push(new google.maps.Marker({
      //   map: map,
      //   icon: icon,
      //   title: place.name,
      //   position: place.geometry.location
      // }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);

});

  var table = document.getElementById("poiTable");
  var coordonnees=[];// Toutes les coordonnées

  waitRow();
  function waitRow(){
    if(table.rows[1]==undefined){

      waitRow();
    }
    else{
      for (var i = 0, row; row = table.rows[i]; i++) { //chaque point
        debugger
        var point=[];
        var k=0;
        for (var j = 0, col; col = row.cells[j]; j++) {
          if (j >= 2 && j != 3) {
            point[k] = col;
            k++;
          }
        }
        coordonnees[i] = point;
      }
      for (var i = 0; i < coordonnees.length; i++) {
        setTimeout(function () {
          ajoutePoint();
        }, i * 800);
      }
    }
  }


  var iterateur = 0;

  function ajoutePoint() {
    var BU = coordonnees[iterateur];
    var myLatLng = new google.maps.LatLng(BU[0], BU[1]);
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      clickable: true,
      animation: google.maps.Animation.DROP, /* animation : le point est déposé sur la carte */
      descriptionLabo: BU[2], /* description qui sera affichée lorsqu'on clique sur le point */
    });
    google.maps.event.addListener(marker, 'click', function () {
      /* Ajoute l'info-bulle sur le point lorsqu'on clique dessus */
      var infobulle = new google.maps.InfoWindow({
        content: this.descriptionLabo
      });
      infobulle.open(map, this);
    });
    iterateur++;
  }
}
 // google.maps.event.addDomListener(window,"load", initAutocomplete);
