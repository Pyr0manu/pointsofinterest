import {Component, ElementRef, Input, OnInit, SimpleChange, SimpleChanges, ViewChild} from '@angular/core';
import {WrapperService} from "../services/wrapper.service";
import {Point} from "../../models/models";
import {PointsService} from "../points.service";

declare const google:any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  nativeMapElement:any;
  map:any;
  @Input() pointsFromPointsComponent:Point[]=[];

  constructor(public element:ElementRef, public service:PointsService) {
  }

  ngOnInit() {
    this.nativeMapElement=this.element.nativeElement.querySelector('div#map');
    this.initMap()
  }

  ngOnChanges() {
   this.addPoints();
  }

  initMap(){
    this.map = new google.maps.Map(this.nativeMapElement, {
      center: {lat: 36.746828, lng: 3.035181},
      zoom: 13,
      mapTypeId: 'roadmap'
    });
    console.log("tu as créé la carte you BMF !")
    console.log("voici les points: "+this.pointsFromPointsComponent)
  }

  addPoints(){
    //on parcourt la liste de points et on ajoute les points à la carte

    for(let point of this.pointsFromPointsComponent){
      console.log("voici le nom du point à sa creation : "+point.nom)
      var myLatLng = new google.maps.LatLng(point.latitude, point.longitude);
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        clickable: true,
        animation: google.maps.Animation.DROP, /* animation : le point est déposé sur la carte */
        descriptionLabo: point.nom, /* description qui sera affichée lorsqu'on clique sur le point */
      });
      google.maps.event.addListener(marker, 'click', function () {
        /* Ajoute l'info-bulle sur le point lorsqu'on clique dessus */
        var infobulle = new google.maps.InfoWindow({
          content: this.descriptionLabo
        });
        infobulle.open(this.map, this);
      });

    }



  }
}
