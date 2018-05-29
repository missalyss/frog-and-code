var express = require('express');
var router = express.Router();
const knex = require('../db/knex');


router.get('/', (req, res, next) => {
  knex('music').then(allAlbums => {
    res.render('music', {allAlbums});
  })
})

router.get('/new', (req, res, next) => {
  res.render('new')
})

router.get('/:id/edit', (req, res, next) => {
  knex('music').where('id', req.params.id).then(oneAlbum => {
    res.render('edit', {oneAlbum})
  })
})

router.get('/:id/delete', (req, res, next) => {
  var id = req.params.id
  knex('music').where('id', req.params.id).then(oneAlbum => {
    res.render('delete', {oneAlbum})
  })
})

router.get('/:id', (req, res, next) => {
  var id = req.params.id
  knex('music').where({ id }).then(oneAlbum => {
    console.log('oneAlbum: ', oneAlbum);
    res.render('view-one', {oneAlbum})
  })
})

router.post('/', (req, res, next) => {
  if (!req.body.album) {
    const error = 'Your album needs a name, yo!'
    res.render('new', { error })
  } else {
    knex('music').insert(req.body).then(() => {
      res.redirect('/music')
    })
  }
})

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { album } = req.body;
  if (!album) {
    var error = 'Why would you get rid of the album? Go back and put it back!'
    res.render('edit', { album, error })
  } else {
    knex('music').where({ id }).update(req.body).then(() => {
      res.redirect('/music')
    })
  }
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  knex('music').del().where({ id }).then(() => {
    res.redirect('/music')
  })
})

module.exports = router;
