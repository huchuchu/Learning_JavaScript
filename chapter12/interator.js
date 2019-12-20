$(document).ready(function(){

    const book = [
        "AAAAAAAAAAA",
        "BBBBBBBBBBBB",
        "CCCCCCCCCCCC",
        "DDDDDDDDDDD",
        "EEEEEEEEEEEEEEEE",
    ];
   
    const it = book.values(); //interator 생성

    let current = it.next();
    while(!current.done){
        // console.log(current.value);
        current = it.next();
    }

    const it1 = book.values();
    const it2 = book.values();

    // console.log(it1.next());
    // console.log(it1.next());

    // console.log(it2.next());

    // console.log(it1.next());

    class Log{
        constructor(){
            this.message = [];
        }

        add(message){
            this.message.push({message, timestamp : Date.now() });
        }

        [Symbol.iterator](){
            return this.message.values();
        }
    }

    const log = new Log();
    log.add("졸려");
    log.add("곱창");
    log.add("치킨");

    for(let entry of log){
        // console.log(`${entry.message} @${entry.timestamp}`)
    }

    class Log02{
        constructor(){
            this.message = [];
        }

        add(message){
            this.message.push({message, timestamp : Date.now() });
        }

        [Symbol.iterator](){
            let i = 0;
            const message = this.message;
            return{
                next(){
                    if(i >= message.length){
                        return { value : undefined, done : true};
                    }
                    return { value: message[i++], done: false};
                }
            }
        }
    }

    const log02 = new Log02();
    log02.add("유튜브");
    log02.add("멜론");
    log02.add("플로");


    class FibonacciSequence{
        [Symbol.iterator](){
            let a = 0, b = 1;
            return{
                next(){
                    let rval = { value: b , done:false};
                    b += a;
                    a = rval.value;
                    return rval;
                }
            }
        }

    }

    const fib = new FibonacciSequence();
    let i = 0;
    for ( let n of fib){
        console.log(n);
        if(++i > 9) break;
    }


  

 
    



})