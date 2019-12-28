$(document).ready(function(){

    // class User{
    //     setEmail(value){
    //         if(!/@/.test(value)) throw new Error(`invalid email : ${value}`);
    //         this[USER_EMAIL] = value;
    //     }
    //     getEmail(){
    //         return this[USER_EMAIL];
    //     }
    // }
    
    const USER_EMAIL = Symbol();
    class User{
        set email(value){
            if(!/@/.test(value)) throw new Error(`invalid email : ${value}`);
            this[USER_EMAIL] = value;  
        }
        get email(){
            return this[USER_EMAIL];
        }
    }

    // u.setEmail("dahyun@yoo.com");
    // console.log(`User email: ${u.getEmail()}`);    
    const u = new User();
    u.email = "dh@yoo.com";
    console.log(`User Email: ${u.email}`);

    const obj = {foo : "bar"};
    console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));

    Object.defineProperty(obj, 'color', {
        get : function() {return this._color; },
        set : function(value) {this._color = value},        
    });

    Object.defineProperty(obj, 'name', {
        value : 'Cynthia',  
       
    });

    Object.defineProperty(obj, 'greet', {
        value : function(){return `Hello my name is ${this.name}!!`;}
    })
    console.log(obj);

    const arr = [1,3,5.5, 9,2];
    Object.defineProperty(arr, 'sum', {
        value : function() {return this.reduce((a,x)=> a+x);},
        enumerable : false
        
    })

    console.log(arr);

});