import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSliderModule,
  MatSortModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSliderModule,
    MatSortModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSliderModule,
    MatSortModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
