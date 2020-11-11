import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissonRecordsComponent } from './misson-records/misson-records.component';

const routes: Routes = [
  {
    path : '',
    component: MissonRecordsComponent
  },
  {
    path : 'misson-records',
    component: MissonRecordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
