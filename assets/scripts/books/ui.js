'use strict'

const showBooksTemplate = require('../templates/book-listing.handlebars')
const app = require('../app.js')

const getBooksSuccess = (data) => {
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('#kids').html(showBooksHtml)
  if (app.current_kid_id === undefined) {
    $('#result').text('Books retrieved successfully!!')
  }
  app.books = data.books
}

const failure = (error) => {
  $('#book-content').text('Something went wrong, please try again - ' + error.statusText)
}

const updateBookSuccess = (data) => {
  $('#result').text('Book updated successfully!!')
  $('#bookModal').modal('hide')
}

const updateBookFailure = (error) => {
  $('#book-content').text('Something went wrong, please try again - ' + error.statusText)
}

const createBookSuccess = (data) => {
  $('#result').text('Book added successfully!!')
  $('#bookModal').modal('hide')
}

const createBookFailure = (error) => {
  $('#book-content').text('Something went wrong, please try again - ' + error.statusText)
}

const deleteBookSuccess = (data) => {
  $('#result').text('Book deleted successfully!!')
}

const deleteBookFailure = (error) => {
  $('#book-content').text('Something went wrong, please try again - ' + error.statusText)
}

module.exports = {
  getBooksSuccess,
  failure,
  updateBookSuccess,
  updateBookFailure,
  createBookSuccess,
  createBookFailure,
  deleteBookSuccess,
  deleteBookFailure
}
