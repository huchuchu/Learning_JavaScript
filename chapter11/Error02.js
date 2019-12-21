$(document).ready(function(){

    function billPay(amount, payee, account){
        if(amount > account.balance){
            throw new Error ("insufficial funds");
        account.transfer(payee, amount);
        }
    }

    function a(){
        console.log('a : calling b');
        b();
        console.log('a : done');
    }

    function b(){
        console.log('b : calling c');
        c();
        console.log('c : done');
    }

    function c(){
        console.log('c : throwing error');
        throw new Error ('c error');
        console.log('c :  done');
    }
    
    function d(){
        console.log('d :  calling c');
        c();
        console.log('d : done');
    }

    try{
        a();
    }catch(err){
        console.log(err.stack);
    }

    try{
        d();
    }catch(err){
        console.log(err.stack);
    }

});