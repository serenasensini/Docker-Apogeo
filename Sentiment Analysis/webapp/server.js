const request = require('request');
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.get('/ping', function(req, res) {
  res.send('pong');
});

app.post('/analyze', function(req, res) {
	console.log(req.body);
  if(!req.body){
      
      res.status(400);
      res.json({message: "Bad Request"});
   } else {

	let response = {};
	axios({
		method: 'POST',
		url: 'http://localhost:5000/analyze',
		data: req.body
	}).then(data=>res.send(data.data)).catch(err=>console.log(err));
   }
});

function getSentiment(url, body) {
    const request = require('request');
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (error) reject(error);
            if (response.statusCode !== 200) {
                reject('Invalid status code <' + response.statusCode + '>');
            }
            resolve(body);
        });
    });
}

app.listen(8080, function() {
  console.log('Express server listening on port ', 8080);
});