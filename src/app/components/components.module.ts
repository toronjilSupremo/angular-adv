import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadoComponent } from './incrementado/incrementado.component';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { DonaComponent } from './dona/dona.component';



@NgModule({
  declarations: [
    IncrementadoComponent,
    DonaComponent
  ],
  exports: [
    IncrementadoComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ]
})
export class ComponentsModule { }
