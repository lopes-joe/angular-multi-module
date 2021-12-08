import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorRoutes } from '../modules/calculator/routes/calculator-routing.module';
import { ConversorRoutes } from '../modules/conversor/routes/conversor-routing.module';
import { DashboardRoutes } from '../modules/dashboard/routes/dashboard-routing.module';
import { JogoDaVelhaRoutes } from '../modules/jogo-da-velha/routes/jogo-da-velha-routing.module';
import { TasksRoutes } from '../modules/tasks';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  ... DashboardRoutes,
  ...CalculatorRoutes,
  ...ConversorRoutes,
  ...TasksRoutes,
  ...JogoDaVelhaRoutes
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], // forRoot indica que haverá um módulo de rota úncio para toda a aplicação
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
