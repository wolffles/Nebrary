const express = require('express');
const tv = require('./routes/api/tv')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const https = require('https');
var options = {
  "method": "GET",
  "hostname": "api.themoviedb.org",
  "port": null,
  "path": "/3/discover/tv?include_null_first_air_dates=false&timezone=America%2FNew_York&page=1&sort_by=popularity.desc&language=en-US&api_key=fb6a1d3f38c3d97f67df6d141f936f29",
  "headers": {}
};

app.get('/', (req, res) => {
  
  var request = https.get(options, function (resp) {
    var body = '';

    resp.on('data', function (chunk) {
      body += chunk;
    });

    resp.on('end', function () {
      let obj = JSON.parse(body);
      console.log("Got a response: ", obj);
      res.json(obj)
    });
  }).on('error', function (e) {
    console.log("Got an error: ", e);
  });
  request.end()
})

// app.use('', tv);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));