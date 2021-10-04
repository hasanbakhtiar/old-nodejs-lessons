// setTimeout(function() {
//     console.log("Hello");
// }, 2000);

// setInterval(function() {
//     console.log('Hello');
// }, 1000);


var counter = 1;
var interval = setInterval(function() {
    if (counter ==5)
    clearInterval(interval);
    console.log('Hello'+counter);
    counter++;
}, 1000);