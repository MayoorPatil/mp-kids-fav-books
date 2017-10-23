'use strict'

const showKidsTemplate = require('../templates/kid-listing.handlebars')
const app = require('../app.js')

const getKidsSuccess = (data) => {
  const showKidsHtml = showKidsTemplate({ kids: data.kids })
  app.kids = data.kids
  $('#kids').html(showKidsHtml)
  delete app.current_kid_id
}

const clearBooks = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

const updateKidSuccess = (data) => {
  $('#home').click()
  $('#result').text('Child updated successfully!!')
  $('#kidModal').modal('hide')
}

const updateKidFailure = (error) => {
  console.error(error)
}

const createKidSuccess = (data) => {
  $('#home').click()
  $('#result').text('Child added successfully!!')
  $('#kidModal').modal('hide')
}

const createKidFailure = (error) => {
  console.error(error)
}

const deleteKidSuccess = (data) => {
  $('#home').click()
  $('#result').text('Delete successful!!')
}

const deleteKidFailure = (error) => {
  console.error(error)
}

module.exports = {
  getKidsSuccess,
  clearBooks,
  failure,
  updateKidSuccess,
  updateKidFailure,
  createKidSuccess,
  createKidFailure,
  deleteKidSuccess,
  deleteKidFailure
}
