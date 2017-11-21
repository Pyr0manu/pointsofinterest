import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Categorie, Point} from "../../models/models";
import {PointsService} from "../points.service";


@Component({
  selector: 'app-point-form',
  templateUrl: './point-form.component.html',
  styleUrls: ['./point-form.component.css']
})
export class PointFormComponent implements OnInit {
  point:Point;
  copy:Point;
  categories :Categorie[] = [];


  @Output() eventEmitter: EventEmitter<Point> = new EventEmitter();

  constructor(public service:PointsService) {
    this.service.getCategorie().subscribe(categories => this.categories = categories);
  };

  ngOnInit() {
      this.point =  {
        nom : "",
        address: "",
        description: "",
        latitude : 0,
        longitude : 0,
        categorie: null
    };
  }

  createPoint(){
    this.copy= {...this.point}
    this.service.createPoint(this.point).subscribe(()=> {
      this.eventEmitter.emit(this.copy)
      this.point.nom="";
      this.point.address="";
      this.point.description="";
     })
  }

  getCategories():Categorie[]{
    return this.categories;
  }


}
