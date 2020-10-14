const fs = require('fs');
var Note1 = {
    title : "Circle",
    body : "Shape is Circle and radius must be greater than 10cm.",
    age : 22
}
var Note2 = {
    title : "Square",
    body : "Shape is Square and radius must be greater than 10cm.",
    age : 32
}



var jasonData1 = JSON.stringify(Note1);
var jasonData2 = JSON.stringify(Note2);
/* fs.writeFileSync('firstFile.json',jasonData1);
fs.appendFileSync('firstFile.json',jasonData2); */

var bufferData = fs.readFileSync('firstFile.json');
var arrayData = JSON.parse(bufferData.toString());

console.log(arrayData[0]);
console.log(arrayData[1]);