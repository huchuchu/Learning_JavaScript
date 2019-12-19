$(document).ready(function(){

    const arr = [1,2,3,4,5];
    delete arr[2];
    // console.log(arr);
    // console.log(arr.map( x => 0));
    
    const arr02 = [1, null, "hello", "world", true, undefined];
    delete arr02[3];
    // console.log(arr02.join());
    // console.log(arr02.join(''));
    // console.log(arr02.join(' -- '));

    const attributes = ["Nimble", "Perceptive", "Generous"];
    const html = '<ul><li>' + attributes.join('</li><li>') + '</li></ul>';
    console.log(html);




});