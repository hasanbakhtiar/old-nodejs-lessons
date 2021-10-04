const infoS = {
        info1: 'info1 ',
        info2: 'info2',
        info3: 'info3'
}

const {info1,info2, info4= ' info4'} = infoS;

// const infoNw1 = infoS.info1;
// const infoNw2 = infoS.info2;
console.log(info1 + info2 + info4);


const infoA = [1,2,3];
const [infoAr1,infoAr2,infoAr3] = infoA;
console.log(infoAr1);
console.log(infoAr2);
console.log(infoAr3);