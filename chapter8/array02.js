$(document).ready(function(){

    const arr = ["b","c","d"];
    arr.push("e");
    // console.log(arr);
    arr.pop();
    // console.log(arr);
    arr.unshift("a");
    // console.log(arr);
    arr.shift();
    // console.log(arr);

    const arr01 = [1,2,3];
    arr01.concat(4,5,6);    
    // console.log(arr01);
    // console.log(arr01.concat(4,5,6));
    // console.log(arr01.concat([4,5,6]));
    // console.log(arr01.concat([4,5],6));
    // console.log(arr01.concat([4,[5,6]]));

    const arr02 = [1,2,3,4,5];
    // console.log(arr02.slice(3));
    // console.log(arr02.slice(2,4));
    // console.log(arr02.slice(-2));
    // console.log(arr02.slice(1,-2));
    // console.log(arr02.slice(-2,-1));

    const arr03 = [1,5,7];
    arr03.splice(1,0,2,3,4);
    // console.log(arr03);
    arr03.splice(5,0,6);
    // console.log(arr03);
    arr03.splice(1,2);
    // console.log(arr03);
    arr03.splice(2,1,'a','b');
    // console.log(arr03);

    const arr04 = [1,2,3,4];
    // console.log(arr04.copyWithin(1,2));
    // console.log(arr04.copyWithin(2,0,2));
    // console.log(arr04.copyWithin(0,-3,-1));

    const arr05 = new Array(5).fill(1);
    // console.log(`arr05 = ${arr05}`);
    arr05.fill("a");
    // console.log(`arr05 = ${arr05}`);
    arr05.fill("c",2,4);
    // console.log(`arr05 = ${arr05}`);
    arr05.fill(5.5, -4);
    // console.log(`arr05 = ${arr05}`);
    arr05.fill(0,-3,-1);
    // console.log(`arr05 = ${arr05}`);

    const arr06 = [1,2,3,4,5];
    arr06.reverse();
    // console.log(`arr06 = ${arr06}`);
    arr06.sort();
    // console.log(`arr06 = ${arr06}`);

    const arr07 = [{ name : "suzanne"}, { name : "Jim" }, {name : "Trevor"}, {name: "Amanda"}];
    arr07.sort();    
    for(let num  of  arr07){ console.log(`${num.name}`);  }

    console.log("============")

    arr07.sort((a, b)=> a.name > b.name);
    for(let num  of  arr07){ console.log(`${num.name}`);  }
    console.log("============")


    arr07.sort(function(a,b){
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if( nameA < nameB){
            return -1;
        }
        if( nameA > nameB){
            return 1;
        }        
        //이름이 같을 경우
        return 0;
    });
    for(let num  of  arr07){ console.log(`${num.name}`);  }

    




})