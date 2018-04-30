var express = require('express');
var router = express.Router();
const knex = require('../db/knex');


router.get('/', function(req, res, next) {
  knex('music').then(function (allAlbums) {
    res.render('music', {allAlbums});
  })
})

router.get('/new', function(req, res, next) {
  res.render('new')
})

router.get('/:id/edit', function (req, res, next) {
  knex('music').where('id', req.params.id).then(function(thisAlbum) {
    res.render('edit', {thisAlbum})
  })
})

router.get('/:id/delete', function(req, res, next) {
  var id = req.params.id
  knex('music').where('id', req.params.id).then(function (album) {
    res.render('delete', {album})
  })
})

router.get('/:id', function (req, res, next) {
  var id = req.params.id
  knex('music').where({ id }).then(function (oneAlbum) {
    res.render('view-one', {oneAlbum})
  })
})

router.post('/', function (req, res, next) {
  var album = {
    name, img_url, rating, review
  } = req.body
  if (!name) {
    var error = 'Your album needs a name, yo!'
    res.render('new', {error})
  } else {
    knex('music').insert(album).then(function() {
      res.redirect('/music')
    })
  }
})

router.put('/:id', function (req, res, next) {
  var id = req.params.id
  var album = {
    name, img_url, rating, review
  } = req.body
  if (!name) {
    var error = 'Why would you get rid of the name? Go back and put it back!'
    res.render('edit', {album, error})
  } else {
    knex('music').where('id', id).update(album).then(function() {
      res.redirect('/music')
    })
  }
})

router.delete('/:id', function(req, res, next) {
  knex('music').del().where('id', req.params.id).then(function() {
    res.redirect('/music')
  })
})

module.exports = router
