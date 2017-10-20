'use strict'

const showBooksTemplate = require('../templates/book-listing.handlebars')

const getBooksSuccess = (data) => {
  console.log(data)
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('#kids').html(showBooksHtml)
  $('#result').text('Books retrieved successfully!!')
}

const failure = (error) => {
  console.error(error)
}

const updateBookSuccess = (data) => {
  console.log('Yes, updated successfully' + data)
  $('#result').text('Book updated successfully!!')
  $('#bookModal').modal('hide')
}

const updateBookFailure = (error) => {
  console.error(error)
}

const createBookSuccess = (data) => {
  console.log('Yes, created successfully' + data)
  $('#result').text('Book created successfully!!')
  $('#bookModal').modal('hide')
}

const createBookFailure = (error) => {
  console.error(error)
}

const deleteBookSuccess = (data) => {
  console.log('Yes, deleted successfully' + data)
  $('#result').text('Deleted book successfully!!')
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
