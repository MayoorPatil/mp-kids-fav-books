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

const updateBookSuccess = (data) => {
  console.log('Yes, updated successfully' + data)
}

const updateBookFailure = (error) => {
  console.error(error)
}

module.exports = {
  getKidsSuccess,
  clearBooks,
  failure,
  updateBookSuccess,
  updateBookFailure
}
