import { ContentComponent } from './starter/content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import {HomeComponent} from './starter/home/home.component';
import {ModalComponent} from './starter/modal/modal.component';


const routes: Routes = [
     {
    path: '',
    component: StarterComponent,
    children: [
      {
        path: '',
        component: ContentComponent
      }
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
  } ,
  {
    path: 'modal',
    component: ModalComponent,
  }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
