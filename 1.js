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
 sayName(); // as we have not passed name we will get the name from above declartion of name

 //ARRAY

var names = ['Dhruv','Jimit',"Jay"];
var sname = new Array("Khara","Mehta","Panchal");
console.log(sname);
console.log("My name is ",names[0],sname[0]);
names.pop(); // remove from end so it will remove jay like a stack
console.log(names);
names.unshift("Jay");//adds jay in start of names array
console.log(names);
names.shift();// removes from the start like queue
console.log(names);

/*
JavaScript Array Methods
Method Return Value
concat() A new array made up of the current array, joined with other
array(s) and/or value(s)
every() true if every element in the given array satisfies the provided testing function
filter() A new array with all of the elements of a current array that
test true by the given function
forEach() Completes the function once for each element in the array
indexOf() The first occurrence of the specified value within the array.
Returns ‐1 if the value is not found
join() Joins all the elements of an array into a string
lastIndexOf() The last occurrence of the specified value within the array.
Returns ‐1 if value is not found
map() A new array with the result of a provided function on every
element in the array
pop() Removes the last element in an array
push() Adds new items to the end of an array
reduce() Reduces two values of an array to a single value by applying a function to them (from left to right)
reduceRight() Reduces two values of an array to a single value by applying a function to them simultaneously (from right to left)
reverse() Reverses the order of elements in an array
shift() Removes the first element from an array and returns that
element, resulting in a change in length of an array
slice() Selects a portion of an array and returns it as a new array
some() Returns true if one or more elements satisfy the provided
testing function
sort() Returns an array after the elements in an array are sorted
(default sort order is alphabetical and ascending)
splice() Returns a new array comprised of elements that were
added or removed from a given array
toString() Converts an array to a string
unShift() Returns a new array with a new length by the addition of
one or more elements 

PS unshift() and shift() work in exactly the same way as push() and pop(), respectively, except that they work on the beginning of the array, not the end.

*/




//Call back and arrow in array

/* 
Passing functions as arguments
A callback function is a function that is passed as an argument to another
function. Callback functions are a technique that’s possible in JavaScript
because of the fact that functions are objects
*/

var isEven = (num) =>{
    return num%2===0;
 }
/*USING EVERY
The every() method tests whether all elements in the array pass the test implemented by the provided function. 
It returns a Boolean value.
true if the callback function returns a truthy value for every array element. Otherwise, false.
*/
var result = [2,4,6,9].every(isEven); 
// we are passing isEven and not isEven() as we are reffering the funcion of isEven to every 
console.log(result)


//short code of above
// (e)=>(e%2===0) is a callback function if we dont use {} in a function we dont need to return anything
var r = [2,4,6].every((e)=>(e%2===0))
console.log(r)
