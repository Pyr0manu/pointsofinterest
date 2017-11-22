import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Point} from "../../models/models";
import {PointsService} from "../points.service";

@Component({
  selector: 'app-selectedpoint',
  templateUrl: './selectedpoint.component.html',
  styleUrls: ['./selectedpoint.component.css']
})
export class SelectedpointComponent implements OnInit {

  @Input() pointSelected:Point;
  @Output() eventEmitterSelectedPoint: EventEmitter<Point> = new EventEmitter();

  constructor(public service:PointsService) { }

  ngOnInit() {
  }


  modifierPoint(){
    this.service.modifierPoint(this.pointSelected);
  }
  supprimerPoint(id : number){
    this.service.supprimerPoint(id).subscribe();
  }

}
