{
    //block 1
    const x = 'blue';
    console.log(x);
}
console.log(typeof x);
{
    //block 2
    const x = 3;
    console.log(x);
}
console.log(typeof x);


//_2

{
    //외부블록
    let x = 'blue';
    console.log(x);
    {
        //내부블록
        let x = 3;
        console.log(x);        
    }
    console.log(x);
}
console.log(typeof x);

//_3

{
    //외부 블록
    let x = {color : "blue"};
    let y = x;
    let z = 3;
    {
        //내부 블록
        let x = 5;
        console.log(x);
        console.log(y.color);
        y.color = "red";
        console.log(z);
    }
    console.log(x.color);
    console.log(y.color);
    console.log(z);
}