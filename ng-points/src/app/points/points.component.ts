import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {Categorie, Point} from "../../models/models";
import {MapComponent} from "../map/map.component";
import {PointFormComponent} from "../point-form/point-form.component";
import {PointsService} from "../services/points.service";

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {

  points:Point[] = [];
  motClef : string;
  choixColonne :string;
  categories :Categorie[] = [];
  @ViewChild(MapComponent) map:MapComponent;
  @ViewChild(PointFormComponent) pointForm:PointFormComponent

  ngOnInit() {
    this.pointsService.getPoints().subscribe(points => {
      this.points = points; });
  }

  constructor(public pointsService : PointsService){
    this.motClef=""
    this.pointsService.getCategorie().subscribe(categories => this.categories = categories);
  }

  getPoints():Point[]{
   return this.points;
  }

  filterList(){
    if(this.motClef.length>0 && this.choixColonne.length>1){
      this.pointsService.filterPoints(this.motClef, this.choixColonne).subscribe(points => {
        this.points = points; })
        this.map.addPoints(this.points)
    }
    else {
      this.pointsService.getPoints().subscribe(points => {
        this.points = points; })
        this.map.addPoints(this.points)
    }
  }

  updateList(point:Point){
    this.points.push(point);
    this.map.addPoints(this.points);
  }

  updateListRemove(point : Point){
    this.points = this.points.filter(p => p!==point );
    this.map.addPoints(this.points);
  }

  getCategories():Categorie[]{
    return this.categories;
  }

}
