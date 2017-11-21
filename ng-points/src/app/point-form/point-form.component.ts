import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Point} from "../../models/models";
import {PointsService} from "../points.service";


@Component({
  selector: 'app-point-form',
  templateUrl: './point-form.component.html',
  styleUrls: ['./point-form.component.css']
})
export class PointFormComponent implements OnInit {
  point:Point;

  @Output() eventEmitter: EventEmitter<Point> = new EventEmitter();

  constructor(public service:PointsService) { }

  ngOnInit() {
      this.point =  {
        id: 0,
        name : "",
        address: "",
        description: "",
        latitude : 0,
        longitude : 0,
        type: ""
    };
  }

  createUser(){
    this.service.createPoint(this.point).subscribe(response => this.eventEmitter.emit(this.point));
  }


}
