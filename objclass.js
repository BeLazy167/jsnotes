// import Userc from "./notes"
const User2 = require("./notes.js");
const dhruv = new User2("dhruv", "dhruvkhara@gmail.com");
console.log(dhruv.getInf());
dhruv.enrol("js");
dhruv.enrol("py");
c = dhruv.getClist();
console.log(c.length);
c.forEach((c) => console.log(c));
console.log(dhruv.courseList);
