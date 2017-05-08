const request = require("request");

function fetchPhrase(cb) {
    const key = Math.floor(Math.random() * 10) + 1
    request(`http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&key=${key}`, function (error, response, body) {
      if (error || response.statusCode != 200) {
        console.log("There was an error fetching the quote");
        cb('Ops...something went wrong!');
      } else {
        const {quoteText} = JSON.parse(body.replace(/\'/g, "'"));
        // console.log("Quote:", quoteText);
        cb(null, quoteText);
      }
    });
}
