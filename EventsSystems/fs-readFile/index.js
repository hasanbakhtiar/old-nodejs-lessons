const fs = require('fs');
fs.readFile('demo.txt', (error,data)=>{
    if(error){
        console.log(error);
    }
    console.log(data.toString());
console.log('reading end');

})
const demoFile = fs.readFileSync('demo.txt');
console.log(demoFile);
// console.log('reading end');