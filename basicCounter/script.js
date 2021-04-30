// var counter = document.querySelector(".counter");
// var followers = document.querySelector(".followers");
var counter = document.getElementsByClassName('counter')[0];
var followers = document.getElementsByTagName('p')[0];
let count = 0;
setInterval(() => {
    if (count<=1000) {
        count++;
        counter.innerText = count;    
    }
    
}, 10);

setTimeout(() => {
    followers.innerText = "Followers on instagram!";
}, 3000);