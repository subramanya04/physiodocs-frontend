import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardioComponent } from './cardio/cardio.component';
import { NeuroComponent } from './neuro/neuro.component';
import { OrthoSportsComponent } from './ortho-sports/ortho-sports.component';
import { PediatricsComponent } from './pediatrics/pediatrics.component';
import { SportsComponent } from './sports/sports.component';
import { WomensHealthComponent } from './womens-health/womens-health.component';

const DoctorsRoutes: Routes = [
  {
    path: 'ortho-sports',
    component: OrthoSportsComponent
  },
  {
    path: 'neuro',
    component: NeuroComponent
  },
  {
    path: 'pediatrics',
    component: PediatricsComponent
  },
  { path: 'cardio', component: CardioComponent, data: { animation: 'cardio' } },
  {
    path: 'womens-health',
    component: WomensHealthComponent,
    data: { animation: 'WomensHealth' }
  },
  {
    path: 'sports',
    component: SportsComponent,
    data: { animation: 'sports' }
  },
  {
    path: ':deptId',
    component: SportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(DoctorsRoutes)],
  exports: [RouterModule]
})
export class DoctorsRouterModule {}
