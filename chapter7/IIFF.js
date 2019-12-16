
$(document).ready(function(){

    const message = (function(){

        const secret = "I'm a secret!";
        return `The secret is ${secret.length} characters long`;
    
    })();
    // console.log(message);

    const f = (function(){
        let cnt = 0;
        return function(){
            return `I have been called ${++cnt} time(s)`;
        }
    })();
    console.log(f());
    console.log(f());


});

