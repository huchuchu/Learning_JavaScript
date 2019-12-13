$(document).ready(function(){

    // function f(x){
    //     return `in f : x = ${x}`
    // }
    // console.log(f());

    function getSentence([subject, verb, object]){
        return `${subject} ${verb} ${object}`;
    }
    const arr = ["I", "love", "JavaScript"];
    // console.log(getSentence(arr));


    // const o = {
    //     subject : "I",
    //     verb : "love",
    //     object : "JavaScript",
    // };
    // console.log(getSentence(o));


    function addPrefix(prefix, ...words){
        //나중에 더 좋은 방법을 배운다!!
        const prefixedWords = [];
        for(let i=0; i<words.length; i++){
            prefixedWords[i] = prefix + words[i];
        }
        
        return prefixedWords;
    }

    addPrefix("con", "verse", "vex")
    // console.log(addPrefix("con", "verse", "vex"));

    function f (a, b="default", c=3){
        return `${a} - ${b} - ${c}`;
    }
    // console.log(f(5,6,7));
    // console.log(f(5,6));
    // console.log(f(5));
    // console.log(f());

    const o = {
        name : 'Wallace',
        bark : function(){ return 'Woof!'; },
    }

    //간편버전!
    const p = {
        name : 'Wallce',
        bark() {return 'Woof! ';},
    }    
    // console.log(o);
    // console.log(p);

    const q = {
        name : `Wallace`,
        speak() {return `My name is ${this.name}!`;},
    }
    // console.log(q.speak());

    const speak = q.speak;
    // console.log(speak === q.speak);
    // console.log(speak());

    const r = {
        name : 'Julie',
        greetBackwards : function(){
            function getReverseName(){
                let nameBackwards ='';
                for(let i = this.name.length-1; i>=0; i--){
                    nameBackwards += this.name[i];
                }
                return  nameBackwards;
            }
            return `${getReverseName()} si eman ym, olleH`;       
        },        
    }
    // console.log(r.greetBackwards());

    const s = {
        name : 'Juole',
        greetBackwards : function(){
            const self = this;
            function getReverseName(){
                let nameBackwards ='';
                for(let i = self.name.length-1; i>=0; i--){
                    nameBackwards += self.name[i];
                }
                return nameBackwards;
            }
            return `${getReverseName()}  si eman ym, olleH `;
        },
    }
    console.log(s.greetBackwards());

    const t = {
        name : 'Julie',
        greetBackwards : function(){
            const getReverseName = () => {
                let nameBackwards ='';
                for(let i = this.name.length-1; i>=0; i--){
                    nameBackwards += this.name[i];
                }
                return nameBackwards;
            };
            return `${getReverseName()} si eman ym, olleH`;
        },
    };
    console.log(t.greetBackwards());

});