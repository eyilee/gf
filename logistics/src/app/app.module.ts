import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './module/material.module';

import { LogisticsService } from './service/logistics.service';
import { TimePipe } from './pipe/time.pipe';
import { ControlTableComponent } from './component/control-table/control-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TimePipe,
    ControlTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    LogisticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
