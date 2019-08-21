var express = require('express');
var assert = require('assert');
var restify = require('restify-clients'); //importa o restify-clients
var router = express.Router();

// Creates a JSON client
var client = restify.createJsonClient({
  url: 'http://localhost:4000/' //URL DO SERVIDOR
});

/* GET users listing. */
router.get('/', function(req, res, next) {

  client.get('/users', function(err, request, response, obj){
    assert.ifError(err);

    res.json(obj);
  });

});
/* GET user ID. */
router.get('/:id', function (req, res, next) {

  client.get(`/users/${req.params.id}`, function (err, request, response, obj){
    assert.ifError(err);

    res.json(obj);
  });

});
/* PUT user ID. */
router.put('/:id', function (req, res, next) {

  client.put(`/users/${req.params.id}`, req.body, function (err, request, response, obj){
    assert.ifError(err);

    res.json(obj);
  });

});
/* DELETE user ID. */
router.delete('/:id', function(req, res, next) {

  client.del(`/users/${req.params.id}`, function (err, request, response, obj){
    assert.ifError(err);

    res.json(obj);
  });

});
/* POST user. */
router.post('/', function(req, res, next) {

  client.post(`/users`, req.body, function(err, request, response, obj){
    assert.ifError(err);

    res.json(obj);
  });

});


module.exports = router;
