const info = {
    info1: 'info1',
    info2: 'info2',
    info3: {
        nameInfo: 'Hasan'
    }
};
const {info3:{namaInfo:name}} = info;
console.log(name);