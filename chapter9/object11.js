$(document).ready(function(){

    class Super{
        constructor(){
            this.name = 'Super';
            this.isSuper = true;
        }
    }

    Super.prototype.sneaky = 'not recommended';
    //유효하지만 권장X

    class Sub extends Super{
        constructor(){
            super();
            this.name = 'Sub';
            this.isSub = true;
        }
    }

    const obj = new Sub();
    for(let p in obj){
        console.log(`${p}: ${obj[p]}` + ( obj.hasOwnProperty(p) ? ' ' : ' (inherited)' ));
    }
    
    console.log(obj);
});