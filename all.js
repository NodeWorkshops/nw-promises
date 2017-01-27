const request = require("request");
const YodaSpeak = require('yoda-speak');
const Twitter = require('twitter');
// 4GWvTlzHSQ8z985go6vyBJxmi
var twitter = new Twitter({
  consumer_key: '4GWvTlzHSQ8z985go6vyBJxmi',
  consumer_secret: 'dFi78Dq3q5FcGW7hFNAVx9Xj6mcFRnTFbecpEhjpSzoX1U2jI3',
  access_token_key: '767840093369470984-KxTa3NAwrmM1NYP1ngdip9ipDbyX4ul',
  access_token_secret: 'vEwwJiJYFU1PswJuEf68P5OBW9UxNEpNdn8fm9THst8En'
});

const yoda = new YodaSpeak("6G1BKevTa3msh5tQRejtMufyOwGRp12ju2CjsnQWTHW3AtY4uA");

request('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&key=23', function (error, response, body) {
  if (error || response.statusCode != 200) {
    console.log("There was an error fetching the quote");
  } else {
    const {quoteText} = JSON.parse(body.replace("\\'", "'"));
    console.log("Quote", quoteText);
    yoda.convert(quoteText,
    function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("YS result", result.toString());
            twitter.post('statuses/update', {status: result.toString()},  function(error, tweet, response) {
              if(error) {
                  console.log(error);
              } else {
                 // console.log(tweet);  // Tweet body.
                 console.log(response.headers.status);  // Raw response object.
              }

            });
        }
    })
  }
})