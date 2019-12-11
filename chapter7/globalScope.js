//1. 전역변수 사용
//let name = "Irena"; 
//let age = 25; 

//2.전역 변수를 사용하기보단 단일 객체에 보관하는편이 낫다'
//   하지만 여전히 전역 user에 의존하며 이 객체는 어디서나 수정할 수 있다

// let user={
//     name = "Irena",
//     age = 25,
// }

// function greet(){
//     console.log('Hello, ${user.name}!');
// }

// function getBirthYear(){
//     return new Data().getFullYear() - user.age;
// }

function greet(user){
    console.log('Hello, ${user.name}!');
}
function getBirthYear(user){
    return new Data().getFullYear() - user.age;
}
