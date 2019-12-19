$(document).ready(function(){

    // 클래스 생성
    class Car{
        constructor(){            
        }
    }

    // 인스턴스 생성
    const car1 = new Car();
    const car2 = new Car();

    // instanceof : 객체가 클래스의 인스턴스인지 확인
    console.log(car1 instanceof Car);    // true
    console.log(car2 instanceof Array);  // false


    


}); 