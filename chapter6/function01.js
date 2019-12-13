
$(document).ready(function(){

function getGreeting(){
    return "Hello world";
}

const arr = [1,2,3];
arr[1] = getGreeting;
console.log(arr);
console.log(arr[1]());
console.log(arr[1]);


const f = getGreeting;
// console.log(f());

const o = {};
o.plus = getGreeting;
//  console.log(o);
//  console.log(o.plus());
//  console.log(o.plus);
getGreeting();
getGreeting;



});