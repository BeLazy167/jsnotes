function Hello(){
    console.log("HEllo");
}
Hello();//call function
Hello; //refrence to function


function Hellotwo(name){
    console.log(name);
} //if we call this fucntion and dont pass the given parameters the output will be undefined i.e name = undefined

// two ways to write a function
var lname = function(y){
    return y;
}

var fname = (x) => {
    return x;
}
console.log(fname(10));
// __________________________________________________________________________
//CODE hoisting
// GLOBAL AND EXECUTION
/*
global contect contain
execution context contain
-Variable contect 
-Scope chain
-this

FUNCTION DECLARATION ARE SCANNED AND MADE AVAILABLE
VARIABLE DECLARATION ARE SCANNED AND MADE UNDEFIND
 */

tipper(20);
function tipper(x){
    var bill = parseInt(x);
    console.log(bill+(bill/10)*2)
}//this fuction works and gives output

//both function do the same thing

// xtipper(20)
var xtipper = function (x){
    var bill = parseInt(x);
    console.log(bill+(bill/10)*2)
}//but this function does not work as the execution context makes variable undefinded
//ERROR : TypeError: xtipper is not a function
// if we call xtipper after the function declaration it will work


//SCOPE CHAINING

var name = "Dhruv";
console.log("line 56",name);
 function sayName(){
     console.log("line number 58" ,name);
 }
 sayName() // as we have not passed name we will get the name from above declartion of name


 