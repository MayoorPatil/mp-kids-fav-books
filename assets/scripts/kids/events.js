'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const app = require('../app.js')

const onGetKids = (event) => {
  event.preventDefault()
  api.getKids()
    .then(ui.getKidsSuccess)
    .catch(ui.failure)
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

const populateForm = (id) => {
  const kid = app.kids.find((ele) => ele.id === id)
  $("[name|='kid[first_name]']").val(kid.first_name)
  $("[name|='kid[last_name]']").val(kid.last_name)
  $("[name|='kid[image_url]']").val(kid.image_url)
}

const addKidHandlers = () => {
  $('#home').on('click', onGetKids)
  $('#manage-kid').on('submit', onManageKid)
  $('#create-kid').on('submit', onCreateKid)
  $('#kidModal').on('show.bs.modal', function (e) {
    id = $(e.relatedTarget).data('id')
    if (e.relatedTarget.innerHTML === 'Update Kid') {
      $('#manage-kid').trigger('reset')
      $('#manage-kid').removeClass('hidden')
      populateForm(id)
      $('#create-kid').addClass('hidden')
    } else {
      $('#create-kid').trigger('reset')
      $('#create-kid').removeClass('hidden')
      $('#manage-kid').addClass('hidden')
    }
  })
  $(document).on('click', '#deleteButton', function (e) {
    onDelete(e)
  })
}

module.exports = {
  addKidHandlers
}
