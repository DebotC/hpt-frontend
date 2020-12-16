import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AthletesListComponent } from './components/athletes-list/athletes-list.component';
import { NewAthleteComponent } from './components/new-athlete/new-athlete.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      children: [
        {
          path: '',
          component: AthletesListComponent
        },
        {
          path: 'new',
          component: NewAthleteComponent
        }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class AthletesRoutingModule { }
