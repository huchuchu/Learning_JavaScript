$(document).ready(function(){

    //해체 할당
    // const {a,b,c} = obj;
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);
    
    //객체 선언
    const obj = {b:2, c:3, d:4};    

    let a, b, c ;
    // {a, b, c} = obj; //에러가 일어난다
    ({a, b, c} = obj); // 동작한다
    
    const arr = [1,2,3,4,5];

    //배열 해체 할당
    let [x, y, ...rest] = arr;
    console.log(x);
    console.log(y);
    // console.log(z);   
    console.log(rest);

    let e = 5, f = 10;
    [e, f] = [f, e];
    console.log(e);
    console.log(f);
    
    // if(!option) option = { };

    // option = option || { };

});