import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'zone.js';
import 'reflect-metadata';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {PointsService} from "./points.service";
import { PointsComponent } from './points/points.component';
import { PointFormComponent } from './point-form/point-form.component';
import {Http, HttpModule} from "@angular/http";
import { SelectedpointComponent } from './selectedpoint/selectedpoint.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PointsComponent,
    PointFormComponent,
    SelectedpointComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [PointsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
