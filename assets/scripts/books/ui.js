'use strict'

const showBooksTemplate = require('../templates/book-listing.handlebars')
const app = require('../app.js')

const getBooksSuccess = (data) => {
  app.books = data.books
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('#kids').html(getImageHTML() + showBooksHtml)
  if (app.current_kid_id === undefined || data.books.length === 0) {
    if (showBooksHtml.includes('found')) {
      $('#result').text('')
    } else {
      $('#result').text('Books retrieved successfully!!')
    }
  }
}

const getImageHTML = () => {
  if (app.current_kid_id === undefined || app.books === undefined || app.books.length === 0) {
    return ''
  } else {
    const child = app.kids.find((ele) => ele.id === app.current_kid_id)
    return "<div class='container-fluid bg-1 text-center'><h4>Here are my favorite books!!</h4><img src=\"" +
    child.image_url +
    "\" class='img-circle' alt='Child' width='150' height='150'></div>"
  }
}

const failure = (error) => {
  $('#book-content').text('Sorry, some problem retrieving the books, please try later - ' + error.statusText)
  $('#result').text('Sorry, some problem retrieving the books, please try later - ' + error.statusText)
}

const updateBookSuccess = (data) => {
  $('#result').text('Book updated successfully!!')
  $('#bookModal').modal('hide')
}

const updateBookFailure = (error) => {
  $('#book-content').text('Sorry, some problem while updating, please try later - ' + error.statusText)
  $('#result').text('Sorry, some problem while updating, please try later - ' + error.statusText)
}

const createBookSuccess = (data) => {
  $('#result').text('Book added successfully!!')
  $('#bookModal').modal('hide')
}

const createBookFailure = (error) => {
  $('#book-content').text('Sorry, some problem while adding, please try later - ' + error.statusText)
  $('#result').text('Sorry, some problem while adding, please try later - ' + error.responseText)
}

const deleteBookSuccess = (data) => {
  $('#result').text('Book deleted successfully!!')
}

const deleteBookFailure = (error) => {
  $('#book-content').text('Sorry, some problem while deleting, please try later - ' + error.statusText)
  $('#result').text('Sorry, some problem while deleting, please try later - ' + error.responseText)
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
