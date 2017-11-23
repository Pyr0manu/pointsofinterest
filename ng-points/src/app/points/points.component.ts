import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {PointsService} from "../points.service";
import {Point} from "../../models/models";
import {MapComponent} from "../map/map.component";

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {

  points:Point[] = [];
  @ViewChild(MapComponent) map:MapComponent;

  ngOnInit() {
    this.pointsService.getPoints().subscribe(points => {
      this.points = points; });
  }

  constructor(public pointsService : PointsService){
  };

  getPoints():Point[]{
    return this.points;
  }

  updateList(point:Point){
    this.points.push(point);
    this.map.addPoints(this.points);
  }

  updateListRemove(point : Point){
    this.points = this.points.filter(p => p!==point );
    this.map.addPoints(this.points);
  }
}
