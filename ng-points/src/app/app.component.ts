import {Component, OnInit} from '@angular/core';
import {User} from "../models/models";
import {LoggedService} from "./services/logged.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'the great map';
  logged:User;

  constructor(public service : LoggedService){}

  ngOnInit(){
    this.service.getConnectedUser();
  }
}
