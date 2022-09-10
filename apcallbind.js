//call function
const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
var person1={
    firstname:"arun",
    lastname :"kumar"
}
person.fullName.call(person1);

//apply function

var person2={
    firstname:"vamsi",
    lastname:"krishna"
}
person.fullName.apply(person2);

//bind function
const module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  const unboundGetX = module.getX;
console.log(unboundGetX());

  const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());

//print the student age

var student={age:23};
var printtheage=function(){
    return this.age;
};
console.log(printtheage.call(student));

//currying

let multply=function(x){
    return function(y){
        console.log(x*y);
    }
}

let multipybytwo=multply(2);
multipybytwo(3);
let multipybythree=multply(3);
multipybythree(10);