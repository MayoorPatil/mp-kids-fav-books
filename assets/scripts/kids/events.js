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

const onManageKid = (event) => {
  event.preventDefault()
  const data = getFormFields(event.currentTarget)
  api.updateKid(data, id)
    .then(ui.updateKidSuccess)
    .catch(ui.updateKidFailure)
}

const onCreateKid = (event) => {
  event.preventDefault()
  const data = getFormFields(event.currentTarget)
  console.log(data)
  api.createKid(data)
    .then(ui.createKidSuccess)
    .catch(ui.createKidFailure)
}

const onDelete = (event) => {
  event.preventDefault()
  api.deleteKid(event.target.getAttribute('data-id'))
    .then(ui.deleteKidSuccess)
    .catch(ui.deleteKidFailure)
}

const addKidHandlers = () => {
  $('#getKidsButton').on('click', onGetKids)
  $('#clearBooksButton').on('click', onClearBooks)
  $('#manage-kid').on('submit', onManageKid)
  $('#create-kid').on('submit', onCreateKid)
  $('#kidModal').on('show.bs.modal', function (e) {
    id = $(e.relatedTarget).data('id')
    if (e.relatedTarget.innerHTML === 'Update Kid') {
      $('#manage-kid').removeClass('hidden')
      $('#create-kid').addClass('hidden')
    } else {
      $('#create-kid').removeClass('hidden')
      $('#manage-kid').addClass('hidden')
    }
  })
  $('#bookModal').on('shown.bs.modal', function (e) {
    id = $(e.relatedTarget).data('id')
  })
  $(document).on('click', '#deleteButton', function (e) {
    onDelete(e)
  })
}

module.exports = {
  addKidHandlers
}
