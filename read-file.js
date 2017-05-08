const fs = require("fs");

// Show that it blocks before printing "Done reading file"
console.log("Start to read file");
const result = fs.readFileSync('./data.txt');
console.log("Done reading file");

// Show that it DOESN'T block before printing "Done reading file"
// Introduce concept of callback
fs.readFile('./data.txt', (err, data) => {
  if (err) throw err;
  console.log("Done reading async!");
});
