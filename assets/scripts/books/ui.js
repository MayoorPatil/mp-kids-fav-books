'use strict'

const showBooksTemplate = require('../templates/book-listing.handlebars')

const getBooksSuccess = (data) => {
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('#kids').html(showBooksHtml)
  $('#result').text('Books retrieved successfully!!')
}

const failure = (error) => {
  console.error(error)
}

const updateBookSuccess = (data) => {
  $('#result').text('Book updated successfully!!')
  $('#bookModal').modal('hide')
}

const updateBookFailure = (error) => {
  console.error(error)
}

const createBookSuccess = (data) => {
  $('#result').text('Book added successfully!!')
  $('#bookModal').modal('hide')
}

const createBookFailure = (error) => {
  console.error(error)
}

const deleteBookSuccess = (data) => {
  $('#result').text('Book deleted successfully!!')
}

const deleteBookFailure = (error) => {
  console.error(error)
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
