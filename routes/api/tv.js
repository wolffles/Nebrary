const express = require('express');
const router = express.Router();
const https = require('https');

const validateSearchInput = require("../../validation/search");
const api_key = "fb6a1d3f38c3d97f67df6d141f936f29"

// @route GET api/tv
// @params: page
// @desc shows tv collection by popularity in descending order
// @access Public
router.get('/', (req, res) => {
  let page = req.query.page || 1
  let options = {
    "method": "GET",
    "hostname": "api.themoviedb.org",
    "port": null,
    "path": `/3/tv/popular?page=${page}&language=en-US&api_key=${api_key}`,
    "headers": {}
  }
  var request = https.request(options, async function (resp) {
    var body = '';
    resp.on('data', function (chunk) {
      body += chunk;
    });
    resp.on('end', function () {
      let obj = JSON.parse(body);
      res.json(obj.results)
    });
  }).on('error', function (e) {
    res.json({message: "Got an error: "+  e});
  });
  request.end()
})


// @route GET api/tv/details
// @params: 
// @desc displays details about show
// @access Public
router.get('/details/:id', (req, res) => {
  let id = req.params.id
  var options = {
    "method": "GET",
    "hostname": "api.themoviedb.org",
    "port": null,
    "path": `/3/tv/${id}?language=en-US&api_key=${api_key}`,
    "headers": {}
  };

  var request = https.request(options, async function (resp) {
    var body = '';
    resp.on('data', function (chunk) {
      body += chunk;
    });
    resp.on('end', function () {
      let obj = JSON.parse(body);
      obj.genres_string = obj.genres.map( (ele) => ele.name).join(', ');
      res.json(obj)
    });
  }).on('error', function (e) {
    res.json({ message: "Got an error: " + e });
  });
  request.end()
});

// @route GET api/search
// @params: search, page
// @desc search for collection by title
// @access Public
router.get('/search', async (req, res) => {
  const {errors, isValid} = validateSearchInput(req.query);
  if (!isValid) {
    return res.status(400).json(errors); //status code 400 is bad request.
  }
  let search = req.query.search
  let page = req.query.page || 1
  var options = {
    "method": "GET",
    "hostname": "api.themoviedb.org",
    "port": null,
    "path": `/3/search/tv?page=${page}&query=${search}&language=en-US&api_key=${api_key}`,
    "headers": {}
  };

  var request = https.request(options, function (resp) {
    var body = '';
    resp.on("data", function (chunk) {
      body += chunk
    });

    resp.on("end", function () {
      let obj = JSON.parse(body);
      res.json(obj.results);
      
    });
  }).on('error', function (e) {
    res.json({ message: "Got an error: " + e });
  });
  request.end();
});

module.exports = router;