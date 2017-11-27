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
    this.point = this.service.pointMap;
  }

  createPoint(){

    this.service.createPoint(this.point).subscribe((point)=> {
      this.createPointEvent.emit(point);
      this.point.nom="";
      this.point.address="";
      this.point.description="";
      this.point.categorie=null;
      this.point.latitude=0;
      this.point.longitude=0;
     })
  }

  getCategories():Categorie[]{
    return this.categories;
  }

}
