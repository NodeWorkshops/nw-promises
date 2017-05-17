// https://www.npmjs.com/package/twitter

const request = require("request");
const Twitter = require('twitter');

var twitter = new Twitter({
  consumer_key: '4GWvTlzHSQ8z985go6vyBJxmi',
  consumer_secret: 'dFi78Dq3q5FcGW7hFNAVx9Xj6mcFRnTFbecpEhjpSzoX1U2jI3',
  access_token_key: '767840093369470984-KxTa3NAwrmM1NYP1ngdip9ipDbyX4ul',
  access_token_secret: 'vEwwJiJYFU1PswJuEf68P5OBW9UxNEpNdn8fm9THst8En'
});


const tweet = `Tweet: ${new Date()}`;
twitter.post('statuses/update', {status: tweet},  function(error, tweet, response) {
  if(error) {
      console.log(error);
  } else {
     // console.log(tweet);  // Tweet body.
     console.log(response.headers.status);  // Raw response object.
  }

});