'use strict'

const showKidsTemplate = require('../templates/kid-listing.handlebars')
const app = require('../app.js')

const getKidsSuccess = (data) => {
  const showKidsHtml = showKidsTemplate({ kids: data.kids })
  app.kids = data.kids
  $('#kids').html(showKidsHtml)
  delete app.current_kid_id
}

const failure = (error) => {
  $('#kid-content').text('Sorry, some problem retrieving the children, please try later - ' + error.statusText)
  $('#result').text('Sorry, some problem retrieving the children, please try later - ' + error.statusText)
}

const updateKidSuccess = (data) => {
  $('#home').click()
  $('#result').text('Child updated successfully!!')
  $('#kidModal').modal('hide')
}

const updateKidFailure = (error) => {
  $('#kid-content').text('Sorry, some problem while updating, please try later - ' + error.statusText)
  $('#result').text('Sorry, some problem while updating, please try later - ' + error.statusText)
}

const createKidSuccess = (data) => {
  $('#home').click()
  $('#result').text('Child added successfully!!')
  $('#kidModal').modal('hide')
}

const createKidFailure = (error) => {
  $('#kid-content').text('Sorry, some problem while adding, please try later - ' + error.statusText)
  $('#result').text('Sorry, some problem while adding, please try later - ' + error.responseText)
}

const deleteKidSuccess = (data) => {
  $('#home').click()
  $('#result').text('Delete successful!!')
}

const deleteKidFailure = (error) => {
  $('#kid-content').text('Sorry, some problem while deleting, please try later - ' + error.statusText)
  if (error.status === 500 && error.responseJSON.exception.includes('ForeignKeyViolation')) {
    $('#result').text('This child has associated favorite books. Please delete the books first')
  } else {
    $('#result').text('Sorry, some problem while deleting, please try later - ' + error.responseText)
  }
}

module.exports = {
  getKidsSuccess,
  failure,
  updateKidSuccess,
  updateKidFailure,
  createKidSuccess,
  createKidFailure,
  deleteKidSuccess,
  deleteKidFailure
}
