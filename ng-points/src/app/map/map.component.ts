import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild} from '@angular/core';
import {WrapperService} from "../services/wrapper.service";
import {Point} from "../../models/models";
import {PointsService} from "../points.service";
import {copyObj} from "@angular/animations/browser/src/util";

declare const google:any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit, OnChanges {

  nativeMapElement:any;
  map:any;
  @Input() pointsFromPointsComponent:Point[]=[];
  markers;
  myLatLngs;

  constructor(public element:ElementRef, public service:PointsService) {
  }

  ngOnInit() {
    this.nativeMapElement=this.element.nativeElement.querySelector('div#map');
    this.initMap()
  }

  ngOnChanges(changes: SimpleChanges) {
   console.log("changement !", this.pointsFromPointsComponent);
   if (this.map!=null){
     this.initMap()
   }
   this.addPoints(this.pointsFromPointsComponent);
  }

  initMap(){
    this.map = new google.maps.Map(this.nativeMapElement, {
      center: {lat: 36.746828, lng: 3.035181},
      zoom: 13,
      mapTypeId: 'roadmap'
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
}
