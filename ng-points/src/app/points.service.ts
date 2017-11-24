import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Categorie, Point} from "../models/models";
import {Http} from "@angular/http";
import "rxjs/add/operator/map"

@Injectable()
export class PointsService {

  pointMap:Point;

  constructor(public http:Http) {
    this.pointMap=  {
      nom : "",
      address: "",
      description: "",
      latitude:0,
      longitude : 0
    };

  }

  getpointMap(){
    return this.pointMap;
  }

  setpointMap(lat:number, lon: number) {
    this.pointMap.latitude=lat;
    this.pointMap.longitude=lon;
  }

  getPoints():Observable<Point[]>{
    return this.http.get('http://localhost:8080/poi/api/points').map(response =>response.json());
  }

  filterPoints(motclef : string):Observable<Point[]>{
    return this.http.get('http://localhost:8080/poi/api/points/'+motclef).map(response =>response.json());
  }

  getCategorie():Observable<Categorie[]>{
    return this.http.get('http://localhost:8080/poi/api/points/categories').map(response =>response.json());
  }

  createPoint(point:Point):Observable<Point>{
    return this.http.post('http://localhost:8080/poi/api/points',point).map(response =>response.json());
  }

  modifierPoint(point:Point){
  return this.http.put('http://localhost:8080/poi/api/points',point);
  }

  supprimerPoint(id : number) {
  return this.http.delete('http://localhost:8080/poi/api/points/'+id);
}



}
