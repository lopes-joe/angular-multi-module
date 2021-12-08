import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogoDaVelhaService {

  private readonly TAB_SIZE: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly EMPTY: number = 0;

  private table: any;
  private movesAmount : number;
  private victory: any;

  private _player: number;
  private _showStart: boolean;
  private _showTable: boolean;
  private _showEnd: boolean;

  constructor() {
    this._showStart = true;
    this._showTable = false;
    this._showEnd = false;
    this.movesAmount = 0;
    this._player = this.X;
    this.victory = false;
    this.initializeTable();
   }

  initialize(): void {
    this._showStart = true;
    this._showTable = false;
    this._showEnd = false;
    this.movesAmount = 0;
    this._player = this.X;
    this.victory = false;
    this.initializeTable();
  }

  initializeTable() : void {
    this.table = [this.TAB_SIZE];
    for (let i = 0; i < this.TAB_SIZE; i++) {
      this.table[i] = [this.EMPTY, this.EMPTY, this.EMPTY];
    }
  }

  get showStart() : boolean {
    return this._showStart;
  }

  get showTable() : boolean {
    return this._showTable;
  }

  get showEnd() : boolean {
    return this._showEnd;
  }

  get player(): number {
    return this._player;
  }

  startGame(): void {
    this._showStart = false;
    this._showTable = true;
  }

  play(posX: number, posY: number): void {
    if (this.table[posX][posY] !== this.EMPTY || this.victory){
      return;
    } 
    this.table[posX][posY] = this._player;
    this.movesAmount++;
    this.victory = this.finishMatch(posX, posY, this.table, this._player);
    this._player = (this._player === this.X) ? this.O : this.X;
    
    // !!!!!!!!!!!!! //
    if (!this.victory && this.movesAmount < 9) {
      this.cpuPlay();
    }

    if(this.victory !== false) {
      this._showEnd = true;
    }
    if (!this.victory && this.movesAmount === 9) {
      this._player = 0;
      this._showEnd = true;
    }
  }

  finishMatch(row: number, column: number, table: any, player: number ) {
    let end: any = false;

    if (
        table[row][0] === player &&
        table[row][1] === player &&
        table[row][2] === player
      ) {
        end = [[row, 0], [row, 1], [row, 2]]; 
      }

    if (
      table[0][column] === player &&
      table[1][column] === player &&
      table[2][column] === player
    ) {
      end = [[0, column ], [1, column], [2, column]]; 
    }

    if (
      table[0][0] === player &&
      table[1][1] === player &&
      table[2][2] === player
    ) {
      end = [[0, 0], [1, 1], [2, 2]]; 
    }

    if (
      table[0][2] === player &&
      table[1][1] === player &&
      table[2][0] === player
    ) {
      end = [[0, 2], [1, 1], [2, 0]]; 
    }

    return end;
  }

  cpuPlay(): void {

    let movement: number[] = this.getMovement(this.O);

    if (movement.length <= 0) {
      movement = this.getMovement(this.X);
    }

    if (movement.length <= 0) {
      let movements: any = [];
      for (let i = 0; i < this.TAB_SIZE; i++){
        for (let j = 0; j < this.TAB_SIZE; j++) {
          if (this.table[i][j] === this.EMPTY) {
            movements.push([i, j]);
          }
        }
      }
      let k = Math.floor((Math.random() * (movements.length - 1)));
      movement = [movements[k][0], movements[k][1]];      
    }

    this.table[movement[0]][movement[1]] = this._player;
    this.movesAmount++;
    this.victory = this.finishMatch(
      movement[0], movement[1], this.table, this._player
    );
    this._player = (this._player === this.X) ? this.O : this.X;
  }

  getMovement(player : number): number[] {
    let tab = this.table;
    for (let row = 0; row < this.TAB_SIZE; row++) {
      for (let col = 0; col < this.TAB_SIZE; col++) {
        if (tab[row][col] !== this.EMPTY)
        {
          continue;
        }
        tab[row][col] = player;
        if (this.finishMatch(row, col, tab, player)) {
          return [row, col];
        }
        tab[row][col] = this.EMPTY;
      }
    }
    return [];
  }

  showX(posX: number, posY: number) : boolean {
    return this.table[posX][posY] === this.X;
  }

  showO(posX: number, posY: number) : boolean {
    return this.table[posX][posY] === this.O;
  }

  showVictory(posX: number, posY: number) : boolean {
    let showVictory: boolean = false;

    if (!this.victory) {
      return showVictory;
    }

    for (let pos of this.victory) {
      if (pos[0] === posX && pos[1] === posY) {
        showVictory = true;
        break;
      }
    }
    return showVictory;
  }

  newMatch(): void {
    this.initialize();
    this._showEnd = false;
    this._showStart = false;
    this._showTable = true;
  }
}
