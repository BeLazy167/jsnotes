function Hello() {
  console.log("HEllo");
}
Hello(); //call function
Hello; //refrence to function

function Hellotwo(name) {
  console.log(name);
} //if we call this fucntion and dont pass the given parameters the output will be undefined i.e name = undefined

// two ways to write a function
var lname = function (y) {
  return y;
};

var fname = (x) => {
  return x;
};
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
function tipper(x) {
  var bill = parseInt(x);
  console.log(bill + (bill / 10) * 2);
} //this fuction works and gives output

//both function do the same thing

// xtipper(20)
var xtipper = function (x) {
  var bill = parseInt(x);
  console.log(bill + (bill / 10) * 2);
}; //but this function does not work as the execution context makes variable undefinded
//ERROR : TypeError: xtipper is not a function
// if we call xtipper after the function declaration it will work

//SCOPE CHAINING

var name = "Dhruv";
console.log("line 56", name);
function sayName() {
  console.log("line number 58", name);
}
sayName(); // as we have not passed name we will get the name from above declartion of name

//ARRAY

var names = ["Dhruv", "Jimit", "Jay"];
var sname = new Array("Khara", "Mehta", "Panchal");
console.log(sname);
console.log("My name is ", names[0], sname[0]);
names.pop(); // remove from end so it will remove jay like a stack
console.log(names);
names.unshift("Jay"); //adds jay in start of names array
console.log(names);
names.shift(); // removes from the start like queue
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

PS: unshift() and shift() work in exactly the same way as push() and pop(), respectively, except that they work on the beginning of the array, not the end.

*/

//Call back and arrow in array

/* 
Passing functions as arguments
A callback function is a function that is passed as an argument to another
function. Callback functions are a technique that’s possible in JavaScript
because of the fact that functions are objects
*/

var isEven = (num) => {
  return num % 2 === 0;
};
/*USING EVERY
The every() method tests whether all elements in the array pass the test implemented by the provided function. 
It returns a Boolean value.
true if the callback function returns a truthy value for every array element. Otherwise, false.
*/
var result = [2, 4, 6, 9].every(isEven);
// we are passing isEven and not isEven() as we are reffering the funcion of isEven to every
console.log(result);

//short code of above
// (e)=>(e%2===0) is a callback function if we dont use {} in a function we dont need to return anything
var r = [2, 4, 6].every((e) => e % 2 === 0);
console.log(r);

//  Filter and Fill

//FILL: fill(value, start, end)
const array1 = [1, 2, 3, 4];
// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

//FILTER
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result2 = words.filter((word) => word.length % 5 === 0);
console.log(result2);
// expected output: Array ["exuberant", "destruction", "present"]

//OBJECTS
var user = {
  firstName: "Dhruv",
  lastName: "Khara",
  role: "Admin",
  loginCount: 32,
  faceBookSignedIn: true,
  courseList: [],
  buyCousrse: function (cname) {
    this.courseList.push(cname);
  },
  getCcount: function () {
    return `${this.firstName} has enrolled in ${this.courseList.length} courses`;
  },
};

console.log(user.firstName); //way 1
console.log(user["lastName"]); // way 2

console.log(user.loginCount);
user.loginCount = 44; //update the data
console.log(user.loginCount);

console.table(user);
//better way to look an object

// ['React','Js','Python'].every(user.buyCousrse);
user.buyCousrse("React");
console.log(user.getCcount());
console.table(user);

//For loop basics

const names2 = ["Dhruv", "Jimit", "Jay", "Raj", "Ikjyot"];
// for (let index = 0; index < names2.length; index++) {
//     console.log(names2[index]);
// }

//while do while
// let i = names2.length;
// while (i>=0) {
//     console.log(names2[i]);
//     i--;
// }

//For each
//The forEach() method executes a provided function once for each array element.

// names2.forEach((s)=>(console.log(s)));

//for of and for in

for (const n of names2) {
  console.log(n);
}

const symbol = {
  in: "inr",
  us: "usd",
  au: "ausd",
};

for (const m in symbol) {
  console.log(symbol[m]);
}

/*
OBJECT:
Constructing Objects with constructor functionsTo create a new type of object,
you define a new constructor function.
Constructor functions are formed just like any function in JavaScript, 
but they use the this keyword to assign properties to a new object. 

The new object then inherits the properties of the object type

*/

/*
PROTOTYPE:
Modifying an object typeSuppose that you have your Person object type,
which serves as the proto-type for several objects. 
At some point you realize that the person,
as well as all the objects that inherit from it,
ought to have a few more properties
*/

//code:
var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is: ${this.courseCount}`);
  };
};
// above code is another way of defining object

User.prototype.getFirstname = function () {
  console.log(`Your firstname is : ${this.firstName}`);
};
// using prototype you can access or give them more properties or more functions,getters ,setters etc.

var jay = new User("jay", 2);
// new keyword create new Instances of User
jay.getCourseCount();
jay.getFirstname();

var dhruv = new User("dhruv", 1);
dhruv.getCourseCount();
dhruv.getFirstname();
/*
1)above code will create 2 instances of User.
2)new keyoword is responsible for invoking the custom constructor and creating a unique instances.
3)new keyword is also find all the prototype which are defined and inject that further in user object.
*/

// how to check is property exists or not?
if (jay.hasOwnProperty("firstName")) {
  jay.getFirstname();
}

// above code check if property firstname is present or exists inside a object or not

//Self executing finction
//A JavaScript function that runs as soon as it is defined. Also known as an IIFE (Immediately Invoked Function Expression).

(function sayHello() {
  console.log("Hello");
})();

/*
(function name(){
    statements
})();

Advantages of IIFE:

Do not create unnecessary global variables and functions
Functions and variables defined in IIFE do not conflict with other functions & variables even if they have same name.
Organize JavaScript code.
*/

//Clousure

function outerFunction() {
  const outer = `I see the outer variable!`;
  console.log("outer");
  function innerFunction() {
    console.log(outer);
  }
  return innerFunction;
}

//method 1
var xc = outerFunction(); // xc is calling outerFunction so the function will be executed and outer will be printed and innerFunction will be returned
xc(); // now xc is innner function(so we treat it like a function) and it can have data from parent function

//OR we can do

//method 2

outerFunction()(); //this is called as currying

//ADVANCE JS

// map
/*
1)map is not object they are completely differents
2) map store value in key value pair
3) we can have any value
*/

var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro"); // inserting value in map

console.log(myMap);

// for (let key of myMap.keys()) {
//     console.log(`Key is ${key}`);
// } // this will print all the keys from map

// for (let key of myMap.values()) {
//     console.log(`Value is ${key}`);
// } // this will print all the values from maps

// for (let [key, value] of myMap.entries()) {
//     console.log(`Key is ${key} and Value is ${value}`);
// } // in this case we are using map.entries() which gives you key,value

for (let [key, value] of myMap) {
  console.log(`Key is ${key} and Value is ${value}`);
} // in this case myMap give first key then value

myMap.forEach((value) => console.log(`${value}`)); // In this when we have only one variable in arrow function myMaps give only value
myMap.forEach((value, key) => console.log(`${value} and key is ${key}`)); //  in thi myMap give values first and then keys

myMap.delete(2); // delete value where key is 2 ; syntax map.delete(key)
console.log(myMap);

console.log(myMap.get(1)); // this will print uno

console.log(myMap.has(1)); // this will print true because 1 is inside map

/*
1)for of loop is always give you key first 
2)for each loop is gonna always give you the value first
*/

//basis methods of map
/* 
1) set method syntax : map.set(key,value)
Sets the value for the key in the Map object. Returns the Map object.
example:
myMap.set(1, "Uno");
2) delete method syntax: map.delete(key)
Returns true if an element in the Map object existed and has been removed, or false if the element does not exist. 
example:
myMap.delete(2) // delete value at key 2
3) get method syntax : map.get(key)
Returns the value associated to the key, or undefined if there is none.
example:
console.log(myMap.get(1)); // this will print uno
4) has method syntax : map.has(key)
Returns a boolean asserting whether a value has been associated to the key in the Map object or not.
example:
console.log(myMap.has(1));
for more Information visit "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"
*/

const na = ["Dhruv", 3, "admin"];

// var role = user[2];
// var namesa = user[0];

// var [namesa, n, role] = na;
// console.log(namesa, n, role);

const nsa = { nameas: "Dhruv", num: 3, role: "admin" };
console.log(nsa.nameas);

const { nameas, num, role } = nsa;
console.log(nameas);

// most important thing in destructuring is make sure the names are exactly same

// inheritance in javascript

class User2 {
  constructor(name, email) {
    this.name = name; // this.name is the property of this class
    this.email = email;
  }
  // constructor is a method which runs as soon as the object is being created
  #courseList = []; // this is private to the class (private variable) //defining # before a variable will make it private
  getInfo() {
    return { name: this.name, email: this.email };
  } // this is method inside class
  enrollCourse(name) {
    this.#courseList.push(name);
  } // this is a setter as it sets some value in private variable

  getCourseList() {
    return this.#courseList;
  } // this is a getter as it fetches a private value from the class

  static loginStatic() {
    return "You are logged in";
  } // static simply means that this method is private
  // this method can not inherit by any class

  login() {
    return "You are logged in";
  }
}
// in getter we usually return varible and don't except any parameter usually
// in setter we except variable

class SubAdmin extends User2 {
  constructor(name, email) {
    super(name, email); // this is used to set User class variables
  }
  getAdminInfo() {
    return "I am SubAdmin";
  }
  login() {
    return "login for admin only";
  } // this is overwriting method in User class
}
// here we are inherited class User in SubAdmin
// now SubAdmin class can use all the method and properties

module.exports = User;

// const rock = new User("rock", "rock@gmail.com");
// console.log(rock.getInfo());
// rock.enrollCourse("Angular Bootcamp");
// console.log(rock.getCourseList());
// console.log(rock.courseList);

// object of class Subadmin
const tom = new SubAdmin("tom", "tom@gmail.com");
console.log(tom.getAdminInfo());
console.log(tom.getInfo());
console.log(tom.login()); // here login method defined inside class SubAdmin will run

