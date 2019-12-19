$(document).ready(function(){

    class Person{
        constructor(name){
            this.name = name;
            this.id = Person.nextId++;
        }
    }

    Person.nextId = 0;

    const Jamie = new Person ("Jamie"),
            juliet = new Person ("juliet"),
            peter = new Person ("peter"),
            jay = new Person ("jay");

    const arr = [Jamie, juliet, peter, jay];

   // 1) ID를 직접 비교
    console.log(arr.find(p => p.id === juliet.id));

    // 2) "this" 매개변수를 이용하는 방법    
    const res = arr.find(function (p){
        return p.id === this.id
    }, juliet);

    console.log(res);
});