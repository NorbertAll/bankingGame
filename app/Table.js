export class Table{
    constructor(dealersCards, playersCards){
        this.dealersCards=dealersCards;
        this.playersCards=playersCards;
    }
    showPlayersCards(card){
        this.playersCards.appendChild(card.render())
    }
    showDealersCards(card){
        this.dealersCards.appendChild(card.render())
    }
}