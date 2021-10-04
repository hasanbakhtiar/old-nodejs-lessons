// function first(text, callback){
//     console.log(text);
//     callback();
// }

// first("Hello", function second(){
//     console.log("Second");
// })
// first("Hello", second)


function first(text, callback){
    console.log(text);
    callback();
}

function second(){
    console.log("Second");
}

first("Hello", second)

