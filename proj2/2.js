const red = document.querySelector('.red');
const cyan = document.querySelector('.cyan');
const violet = document.querySelector('.violet');
const orange = document.querySelector('.orange');
const pink = document.querySelector('.pink');
const center = document.querySelector('.center');
const array =[red,cyan,violet,pink,orange,pink]
// console.log(window.getComputedStyle(red).backgroundColor);

var bgcolor = (bgcol) => {
    return window.getComputedStyle(bgcol).backgroundColor; 
//WE CAN GET ANY CSS PROPERTY FROM THIS JUST REPLACE - by camel case example = Background-Color becomes BackgrounColor
}

// [red,cyan,violet,orange,pink].forEach((bgcol) => {
//     console.log(window.getComputedStyle(bgcol).backgroundColor);
// });
//to get the compute style data

// var og = bgcolor(orange);

// orange.addEventListener('mouseenter',()=>{
//     center.style.background = og;
// });

/* 
addEventListener() has several benefits over using the DOM event  
attributes:
✓You can apply more than one event listener to an element.
✓It works on any node in the DOM tree, not just on elements.
✓It gives you more control over when it’s activated.




The addEventListener() method is implemented by using three arguments.

-The first argument is the event type. Unlike the other two event handling methods, addEventListener() just wants the name of the event, without the on prefix.

-The second argument is the function to call when the event happens. As with the event properties method of event handling,
it’s important to not use the parentheses here in order for the function to be assigned to the event handler,
rather than the result of running the function

-The third argument is a Boolean value (true or false) that indicates the order in which event handlers execute 
when an element with an event has a parent element that also is associated with an event.


*/

var bgcolor = (bgcol) => {
    return window.getComputedStyle(bgcol).backgroundColor; 
//WE CAN GET ANY CSS PROPERTY FROM THIS JUST REPLACE - by camel case example = Background-Color becomes BackgrounColor
}

const magic = (element,colorX) => {
    return element.addEventListener('mouseenter',() =>{
        center.style.background = colorX;
    });

}

array.forEach(element => {
    magic(element,bgcolor(element))
});