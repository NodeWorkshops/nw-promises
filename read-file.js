const fs = require("fs");

// Show that it blocks before printing "Done reading file"
console.log("Start to read file");
const result = fs.readFileSync('./data2.txt');
console.log("Done reading file");

// Show that it DOESN'T block before printing "Done reading file"
fs.readFile('./data2.txt', (err, data) => {
  if (err) throw err;
  console.log("Done reading async!");
});
