export class Game{
    public players:string[] = ['player1', 'player2', 'player3', 'player4'];
    public stack:string[] = [];
    public playedcard:string[] = [];
    public currentPlayer:number = 0;

    constructor(){
        for(let i = 1; i < 14; i++){
            this.stack.push('hearts_' + i );
            this.stack.push('diamonds_' + i );
            this.stack.push('clubs_' + i ); 
            this.stack.push('ace_' + i );
        }

        shuffle(this.stack);
    }


}

function shuffle(array:string[]){
    let currentIndex = array.length, temporaryValue,  randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
        temporaryValue  = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
  
    return array;
};