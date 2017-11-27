import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import 'zone.js';
import 'reflect-metadata';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {PointsService} from "./services/points.service";
import { PointsComponent } from './points/points.component';
import { PointFormComponent } from './point-form/point-form.component';
import {Http, HttpModule} from "@angular/http";
import { SelectedpointComponent } from './selectedpoint/selectedpoint.component';
import {} from '@types/googlemaps';
import { TravelFormComponent } from './travel-form/travel-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PointsComponent,
    PointFormComponent,
    SelectedpointComponent,
    TravelFormComponent
  ],
  imports: [
    BrowserModule,HttpModule, FormsModule
  ],
  providers: [PointsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
