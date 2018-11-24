import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule,MatToolbarModule , MatDividerModule , MatListModule,MatIconModule
      ],
      exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule, MatDividerModule, MatListModule,MatIconModule],

})
export class CustomMaterialModule{ }
