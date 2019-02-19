const express = require('express');
const router = express.Router();

const https = require('https');
var options = {
  "method": "GET",
  "hostname": "api.themoviedb.org",
  "port": null,
  "path": "/3/discover/tv?include_null_first_air_dates=false&timezone=America%2FNew_York&page=1&sort_by=popularity.desc&language=en-US&api_key=fb6a1d3f38c3d97f67df6d141f936f29",
  "headers": {}
};
// @route GET api/tv/test
// @desc Tests tv route
// @access Public
router.get('/test', (req,res) => res.json({message: "tv works"}));

// @route GET api/tv/
// @desc landing page
// @access Public
router.get('/', (req, res) => {
  var request = https.request(options, function (resp) {
    var body = '';
    resp.on('data', function (chunk) {
      body += chunk;
    });
    resp.on('end', function () {
      let obj = JSON.parse(body);
      res.json(obj)
    });
  }).on('error', function (e) {
    res.json({message: "Got an error: "+  e});
  });
  // ends the http request
  request.end()
})
module.exports = router;