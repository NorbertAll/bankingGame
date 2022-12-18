export class Hand{
    constructor(){
        this.cards=[];
    }
    addCard(card){
        this.cards.push(card);
    }
    countCardByWeight(weight){
        return this.cards.filter(card=>card.weight==weight).length;
    }
    getStrngth(){
        const cards= this.cards.map(card=>{
            if('A'.includes(card.weight)){
                return 11;
            }
            if('K'.includes(card.weight)){
                return 4;
            }
            if('Q'.includes(card.weight)){
                return 3;
            }
            if('J'.includes(card.weight)){
                return 2;
            }
            if('9'.includes(card.weight)){
                return 0;
            }
            if('10'.includes(card.weight)){
                return 10;
            }
            return parseInt(card.weight);
        });
        return cards.reduce(function(sum, weight){
            return parseInt(sum)+parseInt(weight);
        })
    }
}