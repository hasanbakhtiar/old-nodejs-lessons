const slugify = require('slugify');

const infoText = "Hello everyone  how a u";
const slug = slugify(infoText, '*'); // some-string

console.log(slug);