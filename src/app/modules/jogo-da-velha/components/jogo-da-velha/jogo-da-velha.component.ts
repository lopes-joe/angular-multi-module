import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from '../../shared/jogo-da-velha.service';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {
  
  constructor(private jogoDaVelhaService: JogoDaVelhaService ) { }

  ngOnInit(): void {
    this.jogoDaVelhaService.initialize();
  }

  get showStart(): boolean {
    return this.jogoDaVelhaService.showStart;
  }

  get showTable(): boolean {
    return this.jogoDaVelhaService.showTable;
  }

  get showEnd(): boolean {
    return this.jogoDaVelhaService.showEnd;
  }

  get player() : number {
    return this.jogoDaVelhaService.player;
  }

  startGame($event : any):void {
    $event.preventDefault();
    this.jogoDaVelhaService.startGame();
  }

  play(posX: number, posY: number):void {
    this.jogoDaVelhaService.play(posX, posY);
  }

  showX(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.showX(posX, posY);
  }

  showO(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.showO(posX, posY);
  }

  showVictory(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.showVictory(posX, posY);
  }

  newMatch($event : any) : void {
    $event.preventDefault();
    this.jogoDaVelhaService.newMatch();
  }

}
