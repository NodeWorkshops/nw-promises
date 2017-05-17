const request = require("request");
const Twitter = require('twitter');
const YodaSpeak = require('yoda-speak');
const yoda = new YodaSpeak("6G1BKevTa3msh5tQRejtMufyOwGRp12ju2CjsnQWTHW3AtY4uA");

function fetchPhrase(cb) {
    const key = Math.floor(Math.random() * 10) + 1
    request(`http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&key=${key}`, function (error, response, body) {
      if (error || response.statusCode != 200) {
        console.log("There was an error fetching the quote");
        cb('Ops...something went wrong!');
      } else {
        const {quoteText} = JSON.parse(body.replace(/\\'/g, "*"));
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


function tweetThis(message) {

    var twitter = new Twitter({
      consumer_key: '4GWvTlzHSQ8z985go6vyBJxmi',
      consumer_secret: 'dFi78Dq3q5FcGW7hFNAVx9Xj6mcFRnTFbecpEhjpSzoX1U2jI3',
      access_token_key: '767840093369470984-KxTa3NAwrmM1NYP1ngdip9ipDbyX4ul',
      access_token_secret: 'vEwwJiJYFU1PswJuEf68P5OBW9UxNEpNdn8fm9THst8En'
    });

    return new Promise((resolve, reject) => {
        twitter.post('statuses/update', {status: message},  function(error, tweet, response) {
          if(error) {
            reject(error.message);
          } else {
            resolve(response.headers.status);
          }
        });
    });
}

function convertToYoda(phrase) {
    return new Promise((resolve, reject) => {
        yoda.convert(phrase,
            function(err, result) {
                if (err) {
                    // console.log(err);
                    reject(err);
                } else {
                    // console.log("Result:", result.toString());
                    resolve(result.toString());
            }
        });

    });
}


const runChallange = async () => {
   try {
        const phrase = await fetchPhraseAsPromised()
        const yodaPhrase = await convertToYoda(phrase)
        const tweetResponse = await tweetThis(yodaPhrase)
        console.log(tweetResponse)
   }
   catch (e) {
        console.log(e)
   }

}

runChallange()
