$(document).ready(function(){

    const bruce = { name : "Bruce" };
    const madeline = { name : "MadeLine" };

    //이 함수는 어떤 객체에도 연결되지 않았지만 this를 사용한다
    function greet(){
        return `Hello, I'm ${this.name}!`;
    }
    // console.log(greet());
    // console.log(greet.call(bruce));
    // console.log(greet.call(madeline));
    // console.log(bruce);
    // console.log(madeline);

    function update(birthYear, occupation){
        this.birthYear = birthYear;
        this.occupation = occupation;
    }

    update.call(bruce, 1949, 'singer');
    update.call(madeline, 1942, 'actress');

    // console.log(bruce);
    // console.log(madeline);

    update.apply(bruce,[1955,"actor"]);
    update.apply(madeline,[1918,"writer"]);
    
    // console.log(bruce);
    // console.log(madeline);

    const newBruce = [1940, "martial artist"];
    update.call(bruce, ...newBruce);
    // console.log(bruce);

    const updateBruce = update.bind(bruce);
    updateBruce(1904, "actor");
    // console.log(bruce);

    updateBruce.call(madeline, 1274, "king");
    // console.log(bruce);
    // console.log(madeline);
    //madeline 은 변하지않는다

    const updateBruce1949 = update.bind(bruce, 1949);
    updateBruce1949("singer, songwriter");
    console.log(bruce);

    const arr = [2,3,-5,15,7];
    Math.min.apply(null, arr);
    Math.min(...arr);

    Math.max.apply(null, arr);
    Math.max(...arr);
    
    // console.log( Math.min.apply(null, arr));
    // console.log(Math.min(...arr));
    // console.log( Math.max.apply(null, arr));
    // console.log(Math.max(...arr));

});