
const fs = require("fs");

fs.readFile('./data1.txt', (err, data) => {
  if (err) throw err;
  console.log("readFile: ", data.toString());
});


const result = fs.readFileSync('./data2.txt');
console.log("readFileSync: ", result.toString());