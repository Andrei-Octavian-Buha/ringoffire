import { Component,  OnInit } from '@angular/core';
import { Game } from './../../models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard:string = '';
  game!: Game;
 
  constructor(public dialog: MatDialog) { 
  }
  ngOnInit():void {
    this.newGame();
  }

  takeCard() {
    if(!this.pickCardAnimation){
    this.currentCard = this.game.stack.pop() || '';
    this.pickCardAnimation = true;
    this.game.currentPlayer++;
    this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
    console.log(this.game);
    setTimeout(() => {
        this.pickCardAnimation = false;
        this.game.playedcard.push(this.currentCard);
    },1000);
    }
  }

  newGame() {
    this.game = new Game();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.game.players.push(result);
    });
  }
}
