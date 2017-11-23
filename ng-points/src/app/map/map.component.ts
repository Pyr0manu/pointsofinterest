import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild} from '@angular/core';
import {Point} from "../../models/models";
import {PointsService} from "../points.service";

declare const google:any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit, OnChanges {
  nativeSearchBoxElement:any;
  searchBox:any;
  nativeMapElement:any;
  map:any;
  @Input() pointsFromPointsComponent:Point[]=[];
  markers;
  myLatLngs;

  constructor(public element:ElementRef, public service:PointsService) {
  }

  ngOnInit() {
    this.nativeSearchBoxElement = this.element.nativeElement.querySelector('input#pac-input');
    this.nativeMapElement = this.element.nativeElement.querySelector('div#map');
    this.initMap();
    this.initSearchBox();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.nativeMapElement = this.element.nativeElement.querySelector('div#map');
    if (this.nativeMapElement != null) {
      this.initMap();
    }
    if (this.map!=null){
      this.initMap()
    }
    this.addPoints(this.pointsFromPointsComponent);
  }


  initMap(){
    this.map = new google.maps.Map(this.nativeMapElement, {
      center: {lat: 46.967889, lng: 2.419104},
      zoom: 5,
      mapTypeId: 'satellite'
    });
  }

  addPoints(points:Point[]){
    //on parcourt la liste de points et on ajoute les points à la carte
    this.markers = [];
    //markers.forEach(function(marker){marker.setMap(null)});
    this.myLatLngs = [];
    for(let i = 0 ; i<points.length;i++){
      var point = points[i];

      this.myLatLngs[i] = new google.maps.LatLng(point.latitude, point.longitude);
      this.markers[i] = new google.maps.Marker({
        position: this.myLatLngs[i],
        map: this.map,
        clickable: true,
        animation: google.maps.Animation.DROP, /* animation : le point est déposé sur la carte */
        descriptionLabo: point.nom, /* description qui sera affichée lorsqu'on clique sur le point */
        setMap: this.map
      });
      google.maps.event.addListener(this.markers[i], 'click', function () {
        /* Ajoute l'info-bulle sur le point lorsqu'on clique dessus */
        var infobulle = new google.maps.InfoWindow({
          content: this.descriptionLabo
        });
        infobulle.open(this.map, this);
      });
    }
  }

  initSearchBox(){
    // Create the search box and link it to the UI element.
    this.searchBox = new google.maps.places.SearchBox(this.nativeSearchBoxElement);
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.nativeSearchBoxElement);
    // Bias the SearchBox results towards current map's viewport.
    this.map.addListener('bounds_changed', function() {
     // debugger;
      this.searchBox.setBounds(this.map.getBounds());
    }.bind(this)  );
    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    this.searchBox.addListener('places_changed', function() {
      var places = this.searchBox.getPlaces();
      if (places.length == 0) {
        return;
      }
      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];
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

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: this.map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      }.bind(this));
      this.map.fitBounds(bounds);
    }.bind(this));
  }
}
