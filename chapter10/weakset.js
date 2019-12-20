$(document).ready(function(){

    const naughty = new WeakSet();

    const children = [
        {name : "da"},
        {name : "Hyun"},
    ]

    naughty.add(children[1]);

    for(let child of children){
        if(naughty.has(child)){
            console.log(`Coal for ${child.name}`);
        }else{
            console.log(`Present for ${child.name}`)
        }
    }

    console.log(children);


});