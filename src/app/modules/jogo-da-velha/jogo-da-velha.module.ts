import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './components/jogo-da-velha/jogo-da-velha.component';
import { JogoDaVelhaService } from './shared/jogo-da-velha.service';

@NgModule({
  
  imports: [
    CommonModule
  ]
  ,exports: [
    JogoDaVelhaComponent
  ],
  declarations: [
    JogoDaVelhaComponent
  ],
  providers: [
    JogoDaVelhaService
  ]
})
export class JogoDaVelhaModule { }
