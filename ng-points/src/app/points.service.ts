import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Point} from "../models/models";
import {Http} from "@angular/http";
import "rxjs/add/operator/map"

@Injectable()
export class PointsService {

  constructor(public http:Http) { }


  getPoints():Observable<Point[]>{
    return this.http.get('http://localhost:8080/poi/api/points').map(response =>response.json());
  }

  createPoint(point:Point){
    return this.http.post('http://localhost:8080/poi/api/points',point);
  }

  modifierPoint(point:Point){
  return this.http.put('http://localhost:8080/poi/api/points',point);
  }

  supprimerPoint(id : number) {
  return this.http.delete('http://localhost:8080/poi/api/points/'+id,id);
}


}
