
let globalFunc; //정의되지않은 전역함수
{
    let blockVar = 'a'; //블록 스코프에 있는 변수
    globalFunc = function(){
        console.log(blockVar);
    }
}
globalFunc();

//_2

let f; //정의되지않은 함수

{
    let o = {note : 'Safe'};
    f = function(){
        return 0;
    }
}

let oRef = f();
oRef.note = "Not so safe ater all!";

