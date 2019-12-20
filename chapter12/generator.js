$(document).ready(function(){

    function* rainbow(){
        yield 'red';
        yield 'orange';
        yield 'yellow';
        yield 'green';
        yield 'blue';
        yield 'indigo';
        yield 'violet';
    }

    // const it = rainbow();
    // console.log(it.next());
    // console.log(it.next());
    // console.log(it.next());
    // console.log(it.next());
    // console.log(it.next());
    // console.log(it.next());
    // console.log(it.next());
    // console.log(it.next());

    // for(let color of rainbow()){
    //     console.log(color);
    // }


    function* interrogate(){
        const name = yield "What is your name?";
        const color = yield "What is your favorite color?"
        return `${name}'s favorite color is ${color}`;
    }

    const it = interrogate();
    // console.log(it.next());
    // console.log(it.next('Ethan'));
    // console.log(it.next('orange'));


    function* abc(){
        yield 'a';
        yield 'b';
        return 'c';        
    }

    const it02 = abc();
    // console.log(it02.next());
    // console.log(it02.next());
    // console.log(it02.next());

    for(let a of it02){
        console.log(a);
    }

});