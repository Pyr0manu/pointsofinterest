import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Categorie, Point} from "../../models/models";
import {PointsService} from "../services/points.service";

@Component({
  selector: 'app-point-form',
  templateUrl: './point-form.component.html',
  styleUrls: ['./point-form.component.css']
})
export class PointFormComponent implements OnInit{
  point:Point;
  categories :Categorie[] = [];
  @Output() createPointEvent: EventEmitter<Point> = new EventEmitter();

  constructor(public service:PointsService) {
    this.service.getCategorie().subscribe(categories => this.categories = categories);
  };

  ngOnInit() {
    this.point =  {
      nom : "",
      address: "",
      description: "",
      latitude:this.service.getPointMap().latitude,
      longitude :this.service.getPointMap().longitude
    };
  }

  setPoint() {
    this.point.longitude= this.service.getPointMap().longitude
    this.point.latitude= this.service.getPointMap().latitude
  }

  createPoint(){

    this.service.createPoint(this.point).subscribe((point)=> {
      this.createPointEvent.emit(point);
      this.point.nom="";
      this.point.address="";
      this.point.description="";
      this.point.categorie=null;
      this.point.latitude=this.service.getPointMap().latitude;
      this.point.longitude=this.service.getPointMap().longitude;
     })
  }

  getCategories():Categorie[]{
    return this.categories;
  }

}
