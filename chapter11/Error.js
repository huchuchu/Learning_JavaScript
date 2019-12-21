$(document).ready(function(){

    const err = new Error('invalid email');
   
    
    function validateEmail(email){
        return email.match(/@/) ? email : new Error(`invalid email : ${email}`);
    }
    
    const email = "dahyuyoo.com";

    const validatedEmail = validateEmail(email);
    
    if(validatedEmail instanceof Error){
        console.error(`Error : ${validatedEmail.message}`);
    }else{
        console.log(`valid email: ${validatedEmail}`);
    }


    


});