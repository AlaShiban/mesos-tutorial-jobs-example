var request = require('request');
var process = require('process')
var url = 'http://requestb.in/1d8bxvs1'

request.post(url, {
    form: {
        randomNumber: '' + getRandomInt(0, 10000)
    }
}, function (error, response, body) {
    if (!error) {
        console.log(body);
    } else {
        console.log(error);
    }
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}