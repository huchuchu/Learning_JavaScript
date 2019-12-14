$(document).ready(function(){

    // const SecretHolder = (function(){
    //     const secrets = new WeakMap();
    //     return class {
    //         setSecret(secret){
    //             secret.set(this, secret);
    //         }
    //         getSecret(){
    //             return secrets.get(this);
    //         }
    //     }
    // })();

    // const a = new SecretHolder();
    // const b = new SecretHolder();

    // a.setSecret('secret A');
    // b.setSecret('sectet B');

    // console.log(a.getSecret());
    // console.log(b.getSecret());

    const SecretHolder = (function(){
        const secrets = new WeakMap();
        return class{
            setSecret(secret){
                secrets.set(this, secret);
            }
            getSecret(){
                return secrets.get(this);
            }
        }
    })();
    
    const a = new SecretHolder();
    const b = new SecretHolder();

    console.log(a instanceof SecretHolder);

    console.log(a);   
    
    a.setSecret('secret A');
    console.log(a.getSecret());


});
