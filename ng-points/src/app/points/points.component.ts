import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {Categorie, Point, User} from "../../models/models";
import {MapComponent} from "../map/map.component";
import {PointFormComponent} from "../point-form/point-form.component";
import {SelectedpointComponent} from "../selectedpoint/selectedpoint.component";
import {PointsService} from "../services/points.service";
import {LoggedService} from "../services/logged.service";

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
  users:User[] = [];
  @ViewChild(MapComponent) map:MapComponent;
  @ViewChild(PointFormComponent) pointForm:PointFormComponent

  ngOnInit() {
    this.pointsService.getPoints().subscribe(points => {
      this.points = points; });
  }

  constructor(public pointsService : PointsService, public loggedService : LoggedService){
    this.motClef=""
    this.pointsService.getCategorie().subscribe(categories => this.categories = categories);
    this.loggedService.getUsers().subscribe(users => this.users = users);
  }

  getPoints():Point[]{
   return this.points;
  }

  filterList(){
    if(this.motClef.length>1 && this.choixColonne.length>1){
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

  getUsers():User[]{
    return this.users;
  }

}
