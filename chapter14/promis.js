$(document).ready(function(){


    function addTimeout(fn, timeout){
        if(timeout === undefined) timeout = 1000;
        return function(...args){
            return new Promise(function(resolve, reject){
                const tid  = setTimeout(reject, timeout,
                    new Error ("promis timed out"));
                fn(...args)
                    .then(function(...args){
                        clearTimeout(tid);
                        resolve(...args);
                    })
                    .catch(function(...args){
                        clearTimeout(tid);
                        reject(...args);
                    })
            })
        }
    }





});