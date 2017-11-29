import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Point, User} from "../../models/models";
import {PointsService} from "../services/points.service";
import {LoggedService} from "../services/logged.service";

@Component({
  selector: 'app-selectedpoint',
  templateUrl: './selectedpoint.component.html',
  styleUrls: ['./selectedpoint.component.css']
})
export class SelectedpointComponent implements OnInit {

  @Input() pointSelected:Point;
  @Output() removePoint: EventEmitter<Point> = new EventEmitter();
  logged:User;

  constructor(public service:PointsService, public loggedService:LoggedService) {
    this.loggedService.getConnectedUser().subscribe(user=>this.logged=user);
  }

  ngOnInit() {
  }

  updatePoint(){
    this.service.updatePoint(this.pointSelected);
  }
  deletePoint(point : Point){
      this.service.deletePoint(point.id).subscribe(()=> this.removePoint.emit(point));
  }

}
