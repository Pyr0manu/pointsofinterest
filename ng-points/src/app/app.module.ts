import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PointViewComponent } from './point-view/point-view.component';
import { MapComponent } from './map/map.component';
import {PointsService} from "./points.service";
import { PointsComponent } from './points/points.component';

@NgModule({
  declarations: [
    AppComponent,
    PointViewComponent,
    MapComponent,
    PointsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PointsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
