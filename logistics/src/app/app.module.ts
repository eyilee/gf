import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MaterialModule } from './module/material.module';

import { AppComponent } from './component/app/app.component';
import { ControlTableComponent } from './component/control-table/control-table.component';
import { ControlPanelComponent } from './component/control-panel/control-panel.component';

import { LogisticsService } from './service/logistics.service';

import { TimePipe } from './pipe/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ControlTableComponent,
    ControlPanelComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    LogisticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
