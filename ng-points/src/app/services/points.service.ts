import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Categorie, Point} from "../../models/models";
import {Http} from "@angular/http";
import "rxjs/add/operator/map"

@Injectable()
export class PointsService {

  pointMap:Point;

  constructor(public http:Http) {
    this.pointMap = {
      nom: "",
      address: "",
      description: "",
      latitude: 0,
      longitude: 0
    };
  }
  getPointMap(){
    return this.pointMap;
  }

  setPointMap(latitude:number, longitude:number){
    this.pointMap.latitude = latitude;
    this.pointMap.longitude = longitude;
  }

  setAddressPointMap(address:string){
    this.pointMap.address = address;
  }

  getPoints():Observable<Point[]>{
    return this.http.get('http://localhost:8080/poi/api/points').map(response =>response.json());
  }

  filterPoints(motClef : string, choixColonne : string):Observable<Point[]>{
    return this.http.get('http://localhost:8080/poi/api/points/search/'+motClef+'/'+choixColonne).map(response =>response.json());
  }

  getCategorie():Observable<Categorie[]>{
    return this.http.get('http://localhost:8080/poi/api/points/categories').map(response =>response.json());
  }

  createPoint(point:Point):Observable<Point>{
    return this.http.post('http://localhost:8080/poi/api/points',point).map(response =>response.json());
  }

  updatePoint(point:Point){
  return this.http.put('http://localhost:8080/poi/api/points',point);
  }

  deletePoint(id : number) {
  return this.http.delete('http://localhost:8080/poi/api/points/'+id);
}
  computeTrip(depart:Point, etapes:Point[]):Observable<Point[]> {
    return this.http.post('http://localhost:8080/poi/api/points/itineraire', depart, etapes).map(response => response.json());
  }
}
