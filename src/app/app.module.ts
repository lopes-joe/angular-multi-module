import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from './modules/dashboard';
import { CalculatorModule } from './modules/calculator/calculator.module';
import { ConversorModule } from './modules/conversor';
import { TasksModule } from './modules/tasks';
import { JogoDaVelhaModule } from './modules/jogo-da-velha';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DashboardModule,
    CalculatorModule,
    ConversorModule,
    TasksModule,
    JogoDaVelhaModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
