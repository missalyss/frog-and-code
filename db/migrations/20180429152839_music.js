'use strict'

exports.up = function (knex, Promise) {
  return knex.schema.createTable('music', function (t) {
    t.increments()
    t.string('title').notNullable()
    t.string('artist').notNullable()
    t.bigInteger('usp').notNullable()
    t.string('label')
    t.integer('year')
    t.string('hardware_type')
    t.text('description')
    t.string('img_url')
    t.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('music')
}


// {
//   "status": "Accepted",
//   "thumb": "",
//   "title": "Stockholm",
//   "format": "CD",
//   "Album",
//   "label": "Svek",
//   "role": "Main",
//   "year": 1999,
//   "resource_url": "https://api.discogs.com/releases/24200",
//   "artist": "The Persuader",
//   "type": "release",
//   "id": 24200
// }
