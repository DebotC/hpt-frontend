import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      children: [
        {
          path: 'athletes', 
          loadChildren: () => import('src/app/athletes/athletes.module').then(m => m.AthletesModule)
        }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
