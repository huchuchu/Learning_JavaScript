const message = (function(){
    const secret = "I'm a serect!"
    return 'The secret is ${secret.length} characters long .';

})();
console.log(message);

//_2

const f = (function(){
    let count = 0;
    return function(){
        return 'I have been called ${++count} time(s).';
    }
})();

f();
f();
