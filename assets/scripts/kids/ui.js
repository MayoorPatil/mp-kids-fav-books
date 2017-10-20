'use strict'

const showKidsTemplate = require('../templates/kid-listing.handlebars')

const getKidsSuccess = (data) => {
  console.log(data)
  const showKidsHtml = showKidsTemplate({ kids: data.kids })
  $('#kids').html(showKidsHtml)
  $('#getKidsButton').addClass('hidden')
  $('#result').text('Kids retrieved successfully!!')
}

const clearBooks = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

const updateKidSuccess = (data) => {
  console.log('Yes, updated successfully' + data)
  $('#result').text('Kid updated successfully!!')
  $('#kidModal').modal('hide')
}

const updateKidFailure = (error) => {
  console.error(error)
}

const createKidSuccess = (data) => {
  console.log('Yes, created successfully' + data)
  $('#result').text('Kid created successfully!!')
  $('#kidModal').modal('hide')
}

const createKidFailure = (error) => {
  console.error(error)
}

const deleteKidSuccess = (data) => {
  console.log('Yes, deleted successfully' + data)
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
