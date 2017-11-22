import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {WrapperService} from "../services/wrapper.service";
import {Point} from "../../models/models";

declare const google:any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  nativeMapElement


  constructor(public wrapper:WrapperService, public element:ElementRef) {}

  ngOnInit() {
    this.nativeMapElement=this.element.nativeElement.querySelector('div#map');
    this.initMap();
  }

  initMap(){
    var map = new google.maps.Map(this.nativeMapElement, {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13,
      mapTypeId: 'roadmap'
    });

  }

  // addPoints(){
  //   //on parcourt la liste de points et on ajoute les points à la carte
  //
  //   var points = [
  //     [36.746828, 3.035181,
  //       'ALGERIA'],
  //     [12.36308, -1.546587,
  //       'BURKINA FASO']
  //   ];
  //
  //
  //   // for(let point of points){
  //   //   var myLatLng = new google.maps.LatLng(point[0], point[1]);
  //   //   var marker = new google.maps.Marker({
  //   //     position: myLatLng,
  //   //     map: this.map,
  //   //     clickable: true,
  //   //     animation: google.maps.Animation.DROP, /* animation : le point est déposé sur la carte */
  //   //     descriptionLabo: point[2], /* description qui sera affichée lorsqu'on clique sur le point */
  //   //   });
  //   //   google.maps.event.addListener(marker, 'click', function () {
  //   //     /* Ajoute l'info-bulle sur le point lorsqu'on clique dessus */
  //   //     var infobulle = new google.maps.InfoWindow({
  //   //       content: this.descriptionLabo
  //   //     });
  //   //     infobulle.open(this.map, this);
  //   //   });
  //   //
  //   //
  //   // }
  //
  //
  //
  // }
}
