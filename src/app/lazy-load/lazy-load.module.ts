import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth/auth.guard';
import { LoggedInGuard } from '../core/guards/logged-in/logged-in.guard';

const routes: Routes = [
  {
    path: 'main',
    canActivate: [AuthGuard],
    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'register',
    canActivate: [LoggedInGuard],
    loadChildren: () =>
      import('../register/register.module').then((m) => m.RegisterModule)
  },
  {
    path: 'login',
    canActivate: [LoggedInGuard],
    loadChildren: () =>
      import('../login/login.module').then((m) => m.LoginModule)
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class LazyLoadModule {}
