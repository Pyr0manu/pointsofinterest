import {Component, Input, OnInit} from '@angular/core';
import {Point} from "../../models/models";
import {PointsService} from "../points.service";

@Component({
  selector: 'app-selectedpoint',
  templateUrl: './selectedpoint.component.html',
  styleUrls: ['./selectedpoint.component.css']
})
export class SelectedpointComponent implements OnInit {

   @Input() pointSelected:Point;

  constructor(public service:PointsService) { }

  ngOnInit() {
  }


  modifierPoint(){
    this.service.modifierPoint(this.pointSelected);
  }


}
