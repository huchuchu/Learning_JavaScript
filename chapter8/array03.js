$(document).ready(function(){

    const o = { name : "Jerry"};
    const arr = [1,5,"a", o, true, 5, [1,2], "9"];
    // console.log(arr.indexOf(5));
    // console.log(arr.lastIndexOf(5));
    // console.log(arr.indexOf("a"));
    // console.log(arr.lastIndexOf("a"));
    // console.log(arr.indexOf({name:"Jerry"}));
    // console.log(arr.indexOf(o));
    // console.log(arr.indexOf([1,2]));
    // console.log(arr.indexOf(9));
    // console.log(arr.indexOf("90"));

    // console.log(arr.indexOf("a",5));
    // console.log(arr.indexOf(5,5));
    // console.log(arr.lastIndexOf(5,4));
    // console.log(arr.lastIndexOf(true,3));


    var inventory = [{ name: 'apple', quantity: 2 }, {name: 'banana', quantity: 0}, {name: 'cherry', quantity: 5} ];
    function findcherry(fruit){
        return fruit.name === 'cherry';
    }
    // console.log(inventory.find(findcherry));

    const inventory02 = [{ name: 'apple', quantity: 2 }, {name: 'banana', quantity: 0}, {name: 'cherry', quantity: 5}];
    const res = inventory02.find(fruit => fruit.name ==='cherry');
    // console.log(res);

    const arr02 = [{ id: 5, name : "Judith"} , { id: 7, name : "Francis"}];
    // console.log(arr02.findIndex( o =>o.id === 5 ));
    // console.log(arr02.findIndex( o => o.name ==='Francis'));
    // console.log(arr02.findIndex( o => o ===3));
    // console.log(arr02.findIndex( o => o.id === 7));

    // console.log( arr02.find( o => o.id === 5));
    // console.log(arr02.find( o => o.id === 2));
    
    const arr03 = [1,17,16,5,4,16,10,3,49];
    // console.log(arr03.find( (x, i ) => i>2 && Number.isInteger(Math.sqrt(x)))); //4

    const arr04 = [5,7,12,15,17];
    console.log(arr04.some( x => x%2 ===0));                           //true : 짝수 있으니까
    console.log(arr04.some( x => Number.isInteger(Math.sqrt(x)))); //false : 제곱근 없으니까

    const arr05 = [4,6,16,36];
    console.log(arr05.every(x => x%2 ===0)); //true : 모두 짝수니까
    console.log(arr05.every(x => Number.isInteger(Math.sqrt(x)))) // false : 6은 제곱수가 아니니까


    


});