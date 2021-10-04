// const infoAFunc = function (count, callback) {
//     const result = count + 1;
//     callback(result);
// };

// infoAFunc(2, function (result) {
//     console.log(result);
//     infoAFunc(4, function (result) {
//         console.log(result);
//         infoAFunc(6, function (result) {
//             console.log(result);

//         });
//     });
// });


const infoAFunc = (count)=>{
        return new Promise((resolve,reject)=>{
            // resolve("Everything super!")
            // reject("have a problem")
            if(count == 4){
            resolve("Everything super!")
                
            }else{
            reject("have a problem")

            }
        })
};

infoAFunc(4)
    .then((data)=>{
        console.log(data);
        return 1;
    })
    .then((data)=>{
        console.log(data);
        return 2;

    })
    .then((data)=>{
        console.log(data);
       
    })
    .catch((error)=>{
        console.log(error);
    });