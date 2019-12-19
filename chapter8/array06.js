$(document).ready(function(){

     const arr = [5,7,2,4];
     // const sum = arr.reduce(( a, x ) => a += x, 0 );
     const sum = arr.reduce( ( a, x) =>a+=x );
     // console.log(sum); //18

     const words = ["Beachball", "Rodeo", "Angel", "Aardvark", "Xylophone", "November", 
                         "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"];
     const alpabetical  = words.reduce( ( a , x)=> {
          if (!a[x[0]]) a[x[0]] = [];
          a[x[0]].push(x);         //push() = 배열의 끝에 하나 이상의 요소를 추가한 후 반환
          // console.log(a[x[0]])

          return a ;
     }, {});

     const longWords = words.reduce( ( a, w ) =>w.length > 6 ? a+" "+w : a, "").trim();
     console.log(longWords);
     //trim() 문자열 양 끝의 공백 제거

     
     

     

     



}); 