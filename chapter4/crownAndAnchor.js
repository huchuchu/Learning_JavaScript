$(document).ready(function(){

     // 크라운 앤 앵커 게임의 여섯가지 도형 중 하나를 무작위 반환합니다
    function randFace(){
        return ["crown","anchor","heart","spade","club","diamond"]
        [rand(0,5)] ;
       
    }

    function test(){
        const array = ["crown","anchor","heart","spade","club","diamond"];
        let pickOne = array[random[0,5]];
        return pickOne;               
    }

    //m 이상 n이하의 무작위 정수를 반환한다
    function rand(m, n){
        return m + Math.floor((n-m+1)*Math.random());
    }
   
    let funds = 50; //자본금
    let round = 0; //몇 판 했는지    
    
    //1도 포함돼야하는거 아닌가?!!
    while (funds>1 && funds <100){
        round ++;
        console.log(`round ${round}`);
        console.log(`\t starting funds : ${funds}p`);
        
        //1. 돈을 건다
        
        const bets = {crown : 0, anchor : 0, heart : 0, spade : 0, club : 0, diamond : 0}; //판
        let totalbet = rand(1, funds); //판에 걸 돈
        console.log(`totalbet : ${totalbet}`);        

        if (totalbet === 7){ //7펜스 나오면 하트에 올인
            totalbet = funds;
            bets.heart = totalbet;
        }else{

            //판에 걸 돈을 분배합니다
            let remaining = totalbet;
    
            do{
                let bet = rand(1,remaining); //얼마를
                let face = randFace(); //어디에
                // console.log("face: "+face);
                bets[face] = bets[face] + bet; //어디에 얼마걸지?! 누적해야해서 이렇게하나????
                //  console.log(bets);
                // console.log("typeof bets"+typeof bets);
                remaining = remaining - bet; // 판에 걸 돈 - 쓴돈
    
            }while(remaining>0);          
    
        }

        funds = funds - totalbet; // 자본금에서 쓴돈 빼기
        console.log(`\tbets: `+
        Object.keys(bets).map(face => `${face}: ${bets[face]}pence`).join(', ')+
        `(total: ${totalbet}pence)`);

        //2. 주사위를 굴린다
        const hand = [];
        for (let roll =0; roll<3; roll++){
            hand.push(randFace());
        }

        console.log(`\thand: ${hand.join(', ')}`);

        //3. 그림을 맞췄으면 돈을 가져온다
        let winnings = 0;
        for(let die = 0; die < hand.length; die++){
            let face = hand[die];
            if(bets[face]>0) winnings = winnings + bets[face];
            
        }
        funds = funds + winnings;
        console.log(`\twinnings: ${winnings}`);
    }

    console.log(`\tending funds: ${funds}`);    

});