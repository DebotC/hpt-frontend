import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AthletesRoutingModule } from './athletes-routing.module';
import { AthletesListComponent } from './components/athletes-list/athletes-list.component';
import { NewAthleteComponent } from './components/new-athlete/new-athlete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormControlsModule } from '../custom-form-controls/custom-form-controls.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AthletesListComponent, NewAthleteComponent],
  imports: [
    CommonModule,
    AthletesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormControlsModule,
    SharedModule
  ]
})
export class AthletesModule { }
