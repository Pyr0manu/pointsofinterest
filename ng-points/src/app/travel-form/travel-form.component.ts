import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PointsService} from "../services/points.service";
import {Point} from "../../models/models";

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.css']
})
export class TravelFormComponent implements OnInit {

  tripActivation = false;
  tripComputation = false;
  selectedPoint:Point
  start:Point = null;
  @Input() points:Point[];
  @Output() returnTripOrdered: EventEmitter<Point[]> = new EventEmitter();
  steps:Point[] = [];
  tripOrdered:Point[] = [];

  constructor(public pointsService : PointsService) { }

  ngOnInit() {
  }

  // Function to toggle the trip computation form
  toggleTrip() {
    this.tripActivation = !this.tripActivation;
  }

  toggleResults() {
    this.tripComputation = !this.tripComputation;
  }

  getPoints():Point[]{
    return this.points;
  }

  getSteps(): Point[] {
    return this.steps;
  }

  addStep(point:Point){
    this.steps.push(point)
  }

  removeStep(point:Point){
    this.steps = this.steps.filter(p => p!==point);
  }

  computeTrip(start:Point, steps:Point[]){
    this.pointsService.computeTrip(start, steps).subscribe(points => {

      this.tripOrdered = points
      this.returnTripOrdered.emit(this.tripOrdered)
    });
  }
}
