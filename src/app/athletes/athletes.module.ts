import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AthletesRoutingModule } from './athletes-routing.module';
import { AthletesListComponent } from './components/athletes-list/athletes-list.component';


@NgModule({
  declarations: [AthletesListComponent],
  imports: [
    CommonModule,
    AthletesRoutingModule
  ]
})
export class AthletesModule { }
