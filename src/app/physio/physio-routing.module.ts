import { NgModule } from '@angular/core';
import { PhysioPageComponent } from './physio-page/physio-page.component';
import { Route, RouterModule } from '@angular/router';

export const routes: Route[] = [
  {
    path: ':deptId',
    component: PhysioPageComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhysioRoutingModule {}
