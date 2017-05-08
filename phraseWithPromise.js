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

function handler(resolveFn, rejectFn) {
    fetchPhrase((err, data) => {
        if (err) {
            return rejectFn(err);
        }
        resolveFn(data);
    });
}


function fetchPhraseAsPromised() {
    return new Promise(handler);
}


// new Promise(handler)
// const promises = [fetchPhraseAsPromised(), fetchPhraseAsPromised(), fetchPhraseAsPromised()];
// Promise.all(promises).then(dataList => dataList.join.length);

// throw "ERROR";

// fetchPhraseAsPromised()
//     .then(data1 => fetchPhraseAsPromised().then(data => { throw "BLAH BLASH" }))
//     .then(data2 => fetchPhraseAsPromised().then(data => data+data2))
//     .then(data3 => console.log(data3.length))
//     .catch(err => console.error("ERR: " + err));
