import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthenticatedGuard } from './auth/guards/IsAuthenticated.guard';
import { IsNotAuthenticatedGuard } from './auth/guards/isNotAuthenticated.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate:[IsNotAuthenticatedGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    canActivate: [IsAuthenticatedGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '**',
    redirectTo: 'auth'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})], //usehash define que nuestra aplicativo comenzará desde root en la url en producción
  exports: [RouterModule]
})
export class AppRoutingModule { }
