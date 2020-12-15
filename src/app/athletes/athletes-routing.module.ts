import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AthletesListComponent } from './components/athletes-list/athletes-list.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      children: [
        {
          path: '',
          component: AthletesListComponent
        }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class AthletesRoutingModule { }
