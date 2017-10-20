'use strict'

const app = require('../app.js')
const config = require('../config.js')

const getBooks = function () {
  return $.ajax({
    url: config.apiOrigin + '/books', // "http://book-json.herokuapp.com/books"
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateBook = function (data, id) {
  return $.ajax({
    url: config.apiOrigin + '/books/' + id, // "http://book-json.herokuapp.com/books"
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  })
}

const createBook = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/books', // "http://book-json.herokuapp.com/books"
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  })
}

const deleteBook = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/books/' + id, // "http://book-json.herokuapp.com/books"
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  getBooks,
  updateBook,
  createBook,
  deleteBook
}
