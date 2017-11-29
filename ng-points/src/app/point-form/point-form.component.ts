import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Categorie, Point, User} from "../../models/models";
import {PointsService} from "../services/points.service";
import {LoggedService} from "../services/logged.service";

@Component({
  selector: 'app-point-form',
  templateUrl: './point-form.component.html',
  styleUrls: ['./point-form.component.css']
})
export class PointFormComponent implements OnInit{
  point:Point;
  categories :Categorie[] = [];
  logged:User;
  @Output() createPointEvent: EventEmitter<Point> = new EventEmitter();

  constructor(public service:PointsService, public loggedService:LoggedService) {
    this.service.getCategorie().subscribe(categories => this.categories = categories);
    this.loggedService.getConnectedUser().subscribe(user => this.logged = user);
  };

  ngOnInit() {
    this.point = this.service.pointMap;
  }

  createPoint(){
      this.point.user = this.logged;
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
