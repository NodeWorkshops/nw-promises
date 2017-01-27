const request = require("request");


request('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&key=23', function (error, response, body) {
  if (error || response.statusCode != 200) {
    console.log("There was an error fetching the quote");
  } else {
    const {quoteText} = JSON.parse(body.replace("\\'", "'"));
    console.log("Quote:", quoteText);
  }
});