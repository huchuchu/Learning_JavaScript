$(document).ready(function(){

    const cart = [ { name : "Widget", price : 9.95 }, { name : "Gadget", price : 22.95  }];
    const names = cart.map( x => x.name);
    // console.log(names);
    const prices = cart.map( x => x.price);
    // console.log(prices);
    const discountPrice = prices.map (x => x*0.8);
    // console.log(discountPrice)

    const cart02 = names.map(( x, i ) => ({name : x, price: prices[i]}) );
    // console.log(cart02);

    // //카드덱을 만든다
    // //vla 이 2인 카드,
    // console.log(cards.filter( x => x.val === 2 ));
    // // 다이아몬드
    // console.log(cards.filter( x => x.suit === 'D'));
    // //킹 퀸 주니어
    // console.log(cards.filter( x => x.val > 10));
    // // 하트의 킹 퀸 주니어
    // console.log(cards.filter( x => x.suit === 'H' && x.val > 10));
    
    const cards = [];
    for (let suits of ['H', 'C', 'D', 'S']){ //하트 클로버 다이아몬드 스페이드
        for (let val = 1; val<=13; val++){
            cards.push({suits, val});
        }
    }
    function cardToString(c){
        const suits = { 'H' : '\u2665', 'C' : '\u2663', 'D' : '\u2666', 'S' : '\u2660'};
        const val = { 1: 'A', 11 : 'J', 12 : 'Q', 13: 'K'};

        for (let i = 2; i<=10; i++) val[i] = i;
        //  console.log(val); // 2~10 일반 숫자카드 생성

        return val[c.val] + suits[c.suits];         
    }
    //val가 2인 카드
     console.log(cards.filter( c => c.val ===2).map(cardToString));
    //하트 킹 퀸 주니어
    console.log(cards.filter( c => c.val > 10 && c.suits === 'H').map(cardToString))

    
    

  





    

});