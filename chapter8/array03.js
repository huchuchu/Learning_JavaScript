$(document).ready(function(){

    const o = { name : "Jerry"};
    const arr = [1,5,"a", o, true, 5, [1,2], "9"];
    console.log(arr.indexOf(5));
    console.log(arr.lastIndexOf(5));
    console.log(arr.indexOf("a"));
    console.log(arr.lastIndexOf("a"));
    console.log(arr.indexOf({name:"Jerry"}));
    console.log(arr.indexOf(o));
    console.log(arr.indexOf([1,2]));
    console.log(arr.indexOf(9));
    console.log(arr.indexOf("90"));

    console.log(arr.indexOf("a",5));
    console.log(arr.indexOf(5,5));
    console.log(arr.lastIndexOf(5,4));
    console.log(arr.lastIndexOf(true,3));


    const arr02 = [{ id: 5, name : "Judith"} , { id: 7, name : "Francis"}];
    console.log();
    console.log();
    console.log();
    console.log();

});