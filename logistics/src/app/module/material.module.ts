import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatCheckboxModule,
    MatListModule
  ],
  exports: [
    MatCardModule,
    MatCheckboxModule,
    MatListModule
  ]
})
export class MaterialModule { }
