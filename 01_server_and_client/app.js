//function statement 

function greet(){
    console.log('Whats up ')
}

greet();

//function are first class 

function logGreeting(fn){
    fn();
}
logGreeting(greet);

//function expression 

var greetMe = function() {
    console.log('Hi Abdi ')
}

greetMe();

//it is first class

logGreeting(greetMe);

// use function expression  on the fly 
 logGreeting(function() {
    console.log('Hello Buddy ');



 });