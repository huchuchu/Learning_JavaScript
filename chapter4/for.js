$(document).ready(function(){

    //1.
    // for( let temp, i=0, j=1;  j<30;  i=j, j= i+temp)    
    // console.log(j);

    //2.
    // for(;;) console.log("gogogo");

    // let s = '3';
    // for(; s.length<10; s= '' +s);
    // console.log(s);

    // let x;
    // for( x = 0.2; x<0.3; x+=0.2)
    // console.log(x);

    // const player = {name:'Thomas', rank:'Midshipman', age:25};
    // for(let prop in player){
    //     if(!player.hasOwnProperty(prop)) continue;
    //     console.log(prop + ': ' +player[prop]);
    // }  
    function randFace(){
        return ["crown","anchor","heart","spade","club","diamond"]
        [rand(0,5)] ;       
    }
    function rand(m, n){
        return m + Math.floor((n-m+1)*Math.random());
    }
    const hand = [randFace(),randFace(),randFace()];
    for(let i=0; i<hand.length; i++){
        console.log(`Roll ${i+1}: ${hand[i]}`);
    }
    // for(let face of hand){
    //     console.log(`You rolled...${face}!`);
    // }


   

});