$(document).ready(function(){

    function f(x){
        console.log(`f 내부: ${x}`);
        x = 5;
        console.log(`f 내부: ${x} (할당 후 )`);
    }
    let x = 3;
    console.log(`f를 호출하기 전: x = ${x}`);
    f(x);
    console.log(`f를 호출한 다음: x = ${x}`);


    // function f2(o){
    //     o.message = `f안에서 수정함 ( 이전값: ${o.message})`;
    // }
    // let o = {message : "초기 값"};
    // console.log(`f를 호출하기 전 : o.message =  "${o.message}"`)
    // f2(o);
    // console.log(`f를 호출한 다음: o.message = "${o.message}"`);
    
    function f3(o){
        o.message = "f에서 수정함";
        o = {message : "새로운 객체!"};
        console.log(`f 내부 : o.message = "${o.message}" (할당 후) `);
    }

    let o = {message : "초기 값"};

    console.log(`f를 호출하기 전: o.message = "${o.message}"`);
    f3(o);
    console.log(`f를 호출한 후: o.message =  "${o.message}"`);

    

});