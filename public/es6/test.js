'use strict';

//es6 기능: 블록 스코프 변수 선언
const sentences = [
    { subject : 'JavaScript', verb : 'is', object : 'great'},
    { subject : 'Elephants', verb :  'are', object : 'large'}
];

//es6의 기능:  객체분해
function say({subject,verb,object}){
    //es6 기능: 템플릿 문자열
    //아래 사용한것은 따옴표가 아닌 백틱(`), 즉 키보드의 탭 바로 위에있는 문자이다.
    console.log(`${subject} ${verb} ${object}`);
}

//es6 기능: for...of
for(let s of sentences){
    say(s);
}