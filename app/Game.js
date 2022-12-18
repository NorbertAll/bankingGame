import { Deck } from "./Deck.js";
import { Player } from "./Player.js";
import { Table } from "./Table.js";

class Game{
    constructor({dealerPoints, playerPoints, player, table, hitButton, standButton}){
        this.playerPoints=playerPoints;
        this.dealerPoints=dealerPoints;
        this.hitButton=hitButton;
        this.standButton=standButton;
        this.player=player;
        this.dealer=new Player('Dealer');
        this.table=table;
        this.deck= new Deck();
        this.deck.shuffle(); 
    }
    run(){
        this.hitButton.addEventListener('click', (event)=>this.hitCard())
        this.dealCards();
        
    }
    hitCard(){
        const card=this.deck.pickOne();
        this.player.hand.addCard(card);
        this.table.showPlayersCards(card);
    }
    dealCards(){
        for(let n=0; n<2; n++){
            let card1=this.deck.pickOne();
            this.player.hand.addCard(card1);
            this.table.showPlayersCards(card1);
            let card2=this.deck.pickOne();
            this.dealer.hand.addCard(card2);
            this.table.showDealersCards(card2);
 
        }
        this.playerPoints.innerHTML=this.player.calculatePoints();
        this.dealerPoints.innerHTML=this.dealer.calculatePoints();
    }
}
const table= new Table(document.getElementById('dealersCards'), document.getElementById('playersCards'))
const player=new Player('Norbert');
const game=new Game({
    hitButton:document.getElementById('hit'),
    standButton: document.getElementById('stand'),
    dealerPoints: document.getElementById('dealerPoints'),
    playerPoints: document.getElementById('playerPoints'),
    player,
    table
});
game.run();