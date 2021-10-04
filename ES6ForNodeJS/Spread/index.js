// const arr = ['foo','bar','xyz'];
// console.log(...arr);

// const arr = [1,2,3];
// const arr2 = [...arr,4,5,6,7];
// console.log(arr2);


const arr = ['a','b','c','d'];
const [info1,info2,...rest] = arr;
console.log(rest);
