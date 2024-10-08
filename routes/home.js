var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var express = require('express');
var router = express.Router();
const fs = require("fs")
const path = require("path")

/* GET home page. */
router.get('/', function(req, res, next) {
    let data = fs.readFileSync(path.resolve(__dirname, "../data/introductionArray.json"));
    res.render('home', { array: JSON.parse(data)});
  });

  router.post('/', jsonParser, function(req, res, next) {
    let rawdata = fs.readFileSync(path.resolve(__dirname, "../data/introductionArray.json"));
    let array = JSON.parse(rawdata);
    const newArray = array.concat([req.body.newText])
    fs.writeFileSync(path.resolve(__dirname, "../data/introductionArray.json"), JSON.stringify(newArray));
    res.end();
  });

  router.delete('/', jsonParser, function(req, res, next) {
    let cookeddata = fs.readFileSync(path.resolve(__dirname, "../data/introductionArray.json"));
    let array = JSON.parse(cookeddata);
    const deleteArray = array.filter(x => x.name !== req.body.name)   ([req.body.deleteText])
    if (newArray.length !== array.length ) {
        fs.writeFileSync(path.resolve(__dirname, "../data/introductionArray.json"), JSON.stringify(deleteArrayArray));
      }
      res.end();
  });
  
  module.exports = router;
