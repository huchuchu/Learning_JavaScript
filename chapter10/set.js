$(document).ready(function(){

    const roles = new Set(); //셋 생성

    // 사용자에게 역할을 추가할 때 add()
    roles.add("User");
    console.log(roles);

    // 이 사용자에게 관리자 역할도 추가 add()
    roles.add("Admin");
    console.log(roles);

    console.log(roles.size);

    console.log(roles.delete("Admin"));
    console.log(roles);
    console.log(roles.delete("Admin"));
    
})