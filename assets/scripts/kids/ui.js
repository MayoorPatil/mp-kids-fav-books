'use strict'

const showKidsTemplate = require('../templates/kid-listing.handlebars')

const getKidsSuccess = (data) => {
  const showKidsHtml = showKidsTemplate({ kids: data.kids })
  $('#kids').html(showKidsHtml)
  $('#getKidsButton').addClass('hidden')
  $('#home').removeClass('hidden')
  $('#result').text('Children retrieved successfully!!')
}

const clearBooks = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

const updateKidSuccess = (data) => {
  $('#result').text('Child updated successfully!!')
  $('#kidModal').modal('hide')
}

const updateKidFailure = (error) => {
  console.error(error)
}

const createKidSuccess = (data) => {
  $('#result').text('Child added successfully!!')
  $('#kidModal').modal('hide')
}

const createKidFailure = (error) => {
  console.error(error)
}

const deleteKidSuccess = (data) => {
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
