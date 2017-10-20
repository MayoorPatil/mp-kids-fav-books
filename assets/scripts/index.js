'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const kidEvents = require('./kids/events.js')
const bookEvents = require('./books/events.js')

$(() => {
  authEvents.addAuthHandlers()
  kidEvents.addKidHandlers()
  bookEvents.addBookHandlers()
})
