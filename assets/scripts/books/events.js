'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onGetBooks = (event) => {
  event.preventDefault()
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.failure)
}

let bookId

const onManageBook = (event) => {
  event.preventDefault()
  const data = getFormFields(event.currentTarget)
  console.log('i am here data......' + data)
  api.updateBook(data, bookId)
    .then(ui.updateBookSuccess)
    .catch(ui.updateBookFailure)
}

const onCreateBook = (event) => {
  event.preventDefault()
  const data = getFormFields(event.currentTarget)
  console.log(data)
  api.createBook(data)
    .then(ui.createBookSuccess)
    .catch(ui.createBookFailure)
}

const onDeleteBook = (event) => {
  event.preventDefault()
  api.deleteBook(event.target.getAttribute('data-id'))
    .then(ui.deleteBookSuccess)
    .catch(ui.deleteBookFailure)
}

const addBookHandlers = () => {
  $(document).on('click', '#getBooks', function (e) {
    onGetBooks(e)
  })
  $('#manage-book').on('submit', onManageBook)
  $('#create-book').on('submit', onCreateBook)
  $('#bookModal').on('show.bs.modal', function (e) {
    bookId = $(e.relatedTarget).data('id')
    if (e.relatedTarget.innerHTML === 'Update Book') {
      $('#manage-book').trigger('reset')
      $('#manage-book').removeClass('hidden')
      $('#create-book').addClass('hidden')
    } else {
      $('#create-book').trigger('reset')
      $('#create-book').removeClass('hidden')
      $('#manage-book').addClass('hidden')
    }
  })
  $(document).on('click', '#deleteBookButton', function (e) {
    onDeleteBook(e)
  })
}

module.exports = {
  addBookHandlers
}