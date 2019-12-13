$(document).ready(function(){

    const g = function f(stop){
        if(stop) console.log('f stopped');
        f(true);
    } 
    console.log(g(false));


    const f1 = function() { return "hello"; }
    const f1 = () => "hello";

    const f2 = function(name) { return `Hello, ${name}! ; `}
    const f2 = name => `Hello, ${name}! `;

    const f3 = function(a,b) { return a+b ; }
    const f3 = (a,b) => a+b;

    
    
});