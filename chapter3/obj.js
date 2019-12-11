$(document).ready(function(){

    const obj = {};

    obj.color = "yellow";
    console.log(obj.color);
    
    obj["not an identifier"] = 3;
    console.log(obj["not an identifier"]);
    console.log(obj["color"]);

    const SIZE = Symbol ();
    obj[SIZE] = 8;
    console.log(obj);
    console.log(obj[SIZE]);
    
    obj.SIZE = 0;
    console.log(obj)

    console.log(obj[SIZE]);
    console.log(obj["SIZE"]);

    obj.speak = function(){return "Meow!";};
    console.log(obj);
    console.log(obj.speak());

    delete obj.color;
    console.log(obj);

    const sam = { 
        name : 'Sam', 
        age : 4,
        number : {
            one : 1,
            two : 2,
            three : 3
        },
    }
    console.log(sam) 
    console.log(sam.number.two) ;
    console.log(sam["number"].two);
    console.log(sam.number["two"]);
    console.log(sam["number"]["two"]);  

    const s = "hello";
    console.log(s.toUpperCase());

    s.rating = 3;
    console.log(s.rating);    


});