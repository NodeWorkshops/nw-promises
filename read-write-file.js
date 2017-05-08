const fs = require("fs");

fs.readFile('./data.txt', (err, data) => {
  if (err) {
    return console.error(err.message);    
  }
  console.log("Done reading async!");
  const fileLength = data.toString().length;
  fs.writeFile('/tmp/output.txt', fileLength, (err, data) => {
    if (err) {
        return console.error(err.message);    
    }    
  });
});
