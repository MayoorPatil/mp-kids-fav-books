'use strict'

const app = require('../app.js')
const config = require('../config.js')

const getKids = function () {
  return $.ajax({
    url: config.apiOrigin + '/kids', // "http://book-json.herokuapp.com/books"
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateKid = function (data, id) {
  return $.ajax({
    url: config.apiOrigin + '/kids/' + id, // "http://book-json.herokuapp.com/books"
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  })
}

const createKid = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/kids', // "http://book-json.herokuapp.com/books"
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  })
}

const deleteKid = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/kids/' + id, // "http://book-json.herokuapp.com/books"
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  getKids,
  updateKid,
  createKid,
  deleteKid
}
