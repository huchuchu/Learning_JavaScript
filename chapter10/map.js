$(document).ready(function(){

    const u1 = { name : 'sulki'} ;
    const u2 = { name : 'dahyun'};
    const u3 = { name : 'su'};
    const u4 = { name : 'je'};

    const userRoles = new Map(); //맵 생성

    // 1) set() 메서드로 사용자 역할 할당
    userRoles.set(u1, 'User');
    userRoles.set(u2, 'User');
    userRoles.set(u3, 'Admin');

    //2) set() 메서드는 체인으로 연결할 수 있다!!
    userRoles
        .set(u1, 'User')
        .set(u2, 'User')
        .set(u3, 'Admin');

    //3) 생성자에 배열의 배열을 넘기는 형태로 쓸 수 있다
    
    const userRoles02 = new Map([
        [u2, 'user'],
        [u2, 'User'],
        [u3, 'Admin']
    ]);

    // 정보를 꺼낼 때
    console.log(userRoles.get(u2)); //User

    // has() : 맵에 키가 존재하는지 확인
    console.log(userRoles.has(u1));   //true
    console.log(userRoles.has(u4));   //false

    // 맵에 이미 있는 키에 set() 을 호출하면 값이 교체된다
    userRoles.set(u1, 'Admin');
    console.log(userRoles.get(u1)); //user에서 admin으로 교체된다

    //size 프로퍼티 : 맵의 요소 갯수 반환
    console.log(userRoles.size); //3

    // 
    for(let u of userRoles.keys()){
        console.log(u.name);
    }

    for(let u of userRoles.values()){
        console.log(u);
    }

    for(let u of userRoles.entries()){
        console.log(`${u[0].name} : ${u[0]}`);
    }
    for(let [u, r] of userRoles.entries()){
        console.log(`${u.name} : ${r}`);
    }
    //단축버전
    for(let [u,r] of userRoles){
        console.log(`${u.name} : ${r}`)
    }

    // 배열 요소로 필요하다면 확산연산자 사용
    console.log([...userRoles.values()]);
    
    //맵의 요소 지울때
    userRoles.delete(u2);
    console.log(userRoles.size); //2

    //맵의 요소 모두 삭제
    userRoles.clear();
    console.log(userRoles.size); //0

    





});