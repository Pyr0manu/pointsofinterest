import {Component, OnInit, Output} from '@angular/core';
import {PointsService} from "../points.service";
import {Point} from "../../models/models";

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {


  points:Point[] = [];
  motClef: string;

  ngOnInit() {
    this.pointsService.getPoints().subscribe(points => {
      this.points = points; });
  }

  constructor(public pointsService : PointsService){
  }



  getPoints():Point[]{
    return this.points;
  }

  updateList(point:Point){
    this.points.push(point)
  }

  updateListRemove(point : Point){
    this.points = this.points.filter(p => p!==point );
  }
}
