import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PointsService} from "../services/points.service";
import {Categorie, Point} from "../../models/models";

@Component({
  selector: 'app-categorie-form',
  templateUrl: './categorie-form.component.html',
  styleUrls: ['./categorie-form.component.css']
})
export class CategorieFormComponent implements OnInit {

  @Output() createCategorieEvent: EventEmitter<Point> = new EventEmitter();
  newCategorie:Categorie;

  constructor(public service:PointsService) {this.newCategorie={nom:""}; }

  ngOnInit() {
  }

  createCategorie(){
    this.service.createCategorie(this.newCategorie).subscribe((categorie)=>{this.createCategorieEvent.emit(categorie)})
    this.newCategorie.nom="";
  }
}
