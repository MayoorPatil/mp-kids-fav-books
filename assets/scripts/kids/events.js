'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onGetKids = (event) => {
  event.preventDefault()
  api.getKids()
    .then(ui.getKidsSuccess)
    .catch(ui.failure)
}

const onClearBooks = (event) => {
  event.preventDefault()
  ui.clearBooks()
}

let id

const onUpdateKid = (event) => {
  event.preventDefault()
  const data = getFormFields(event.currentTarget)
  console.log(data)
  api.updateBook(data, id)
    .then(ui.updateKidSuccess)
    .catch(ui.updateKidFailure)
}

const addKidHandlers = () => {
  $('#getKidsButton').on('click', onGetKids)
  $('#clearBooksButton').on('click', onClearBooks)
  $('#update-kid').on('submit', onUpdateKid)
  $('#bookModal').on('shown.bs.modal', function (e) {
    id = $(e.relatedTarget).data('id')
    console.log('hope this works...' + id)
  })
}

module.exports = {
  addKidHandlers
}
