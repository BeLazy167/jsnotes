const red = document.querySelector('.red');
const cyan = document.querySelector('.cyan');
const violet = document.querySelector('.violet');
const orange = document.querySelector('.orange');
const pink = document.querySelector('.pink');
const center = document.querySelector('.center');

// console.log(window.getComputedStyle(red).backgroundColor);

// var bgcolor = (bgcol) => {
//     return window.getComputedStyle(bgcol).backgroundColor; 
// WE CAN GET ANY CSS PROPERTY FROM THIS JUST REPLACE - by camel case example = Background-Color becomes BackgrounColor
// }

[red,cyan,violet,orange,pink].forEach((bgcol) => {
    console.log(window.getComputedStyle(bgcol).backgroundColor);
});