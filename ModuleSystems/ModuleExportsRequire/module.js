function infoFunc(){
    return 'Info Func';
}

function infoFunc1(){
    return 'Info Func1';

}

// module.exports = infoFunc;
module.exports.infoFunc = infoFunc;
module.exports.infoFunc1 = infoFunc1;