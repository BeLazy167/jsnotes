  function Hello() {
    console.log("HEllo");
  }
  Hello();
  Hello;
  function Hellotwo(name) {
    console.log(name);
  }
  var lname = function (y) {
    return y;
  };
  var fname = (x) => {
    return x;
  };
  console.log(fname(10));
  tipper(20);
  function tipper(x) {
    var bill = parseInt(x);
    console.log(bill + (bill / 10) * 2);
  }
  var xtipper = function (x) {
    var bill = parseInt(x);
    console.log(bill + (bill / 10) * 2);
  };
  var name = "Dhruv";
  console.log("line 56", name);
  function sayName() {
    console.log("line number 58", name);
  }
  sayName();
  var names = ["Dhruv", "Jimit", "Jay"];
  var sname = new Array("Khara", "Mehta", "Panchal");
  console.log(sname);
  console.log("My name is ", names[0], sname[0]);
  names.pop();
  console.log(names);
  names.unshift("Jay");
  console.log(names);
  names.shift();
  console.log(names);
  var isEven = (num) => {
    return num % 2 === 0;
  };
  var result = [2, 4, 6, 9].every(isEven);
  console.log(result);
  var r = [2, 4, 6].every((e) => e % 2 === 0);
  console.log(r);
  const array1 = [1, 2, 3, 4];
  console.log(array1.fill(0, 2, 4));
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
      return `${this.firstName}has enrolled in ${this.courseList.length}courses`;
    },
  };
  console.log(user.firstName);
  console.log(user["lastName"]);
  console.log(user.loginCount);
  user.loginCount = 44;
  console.log(user.loginCount);
  console.table(user);
  user.buyCousrse("React");
  console.log(user.getCcount());
  console.table(user);
  const names2 = ["Dhruv", "Jimit", "Jay", "Raj", "Ikjyot"];
  for (const n of names2) {
    console.log(n);
  }
  const symbol = { in: "inr", us: "usd", au: "ausd" };
  for (const m in symbol) {
    console.log(symbol[m]);
  }
  var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
      console.log(`Course count is:${this.courseCount}`);
    };
  };
  User.prototype.getFirstname = function () {
    console.log(`Your firstname is:${this.firstName}`);
  };
  var jay = new User("jay", 2);
  jay.getCourseCount();
  jay.getFirstname();
  var dhruv = new User("dhruv", 1);
  dhruv.getCourseCount();
  dhruv.getFirstname();
  if (jay.hasOwnProperty("firstName")) {
    jay.getFirstname();
  }
  (function sayHello() {
    console.log("Hello");
  })();
  function outerFunction() {
    const outer = `I see the outer variable!`;
    console.log("outer");
    function innerFunction() {
      console.log(outer);
    }
    return innerFunction;
  }
  var xc = outerFunction();
  xc();
  outerFunction()();
  var myMap = new Map();
  myMap.set(1, "Uno");
  myMap.set(2, "dos");
  myMap.set(3, "Tres");
  myMap.set(4, "Cuatro");
  console.log(myMap);
  for (let [key, value] of myMap) {
    console.log(`Key is ${key}and Value is ${value}`);
  }
  myMap.forEach((value) => console.log(`${value}`));
  myMap.forEach((value, key) => console.log(`${value}and key is ${key}`));
  myMap.delete(2);
  console.log(myMap);
  console.log(myMap.get(1));
  console.log(myMap.has(1));
  const na = ["Dhruv", 3, "admin"];
  const nsa = { nameas: "Dhruv", num: 3, role: "admin" };
  console.log(nsa.nameas);
  const { nameas, num, role } = nsa;
  console.log(nameas);
