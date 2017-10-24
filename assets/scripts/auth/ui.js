'use strict'

const app = require('../app.js')
const authHelper = require('./helper')
const showKidsTemplate = require('../templates/kid-listing.handlebars')

const signUpSuccess = function (data) {
  $('#result').text(data.user.email + ' signed up successfully!!')
  authHelper.clearFormInputFields('sign-up')
  authHelper.clearFormInputFields('sign-in')
  authHelper.clearFormInputFields('change-password')
  $('#signUpModal').modal('hide')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#result').text(error.responseText)
  $('#content').text('Either email id is taken or passwords do not match. Please try again - ' + error.responseText)
}

const signInSuccess = (data) => {
  app.user = data.user
  $('#result').text('Signed in successfully!!')
  $('#signUpModal').modal('hide')
  // $('#infoMessage').html('&nbsp;')
  $('#sign-in-register, #infoMessage').addClass('hidden')
  $('#getKidsButton, #add-kid, #add-book').removeClass('hidden')
  displayUsersChildren()
  authHelper.setSignInSuccessShowHide()
}

const displayUsersChildren = () => {
  app.kids = app.user.kids
  const showKidsHtml = showKidsTemplate({ kids: app.user.kids })
  $('#kids').html(showKidsHtml)
  $('#home').removeClass('hidden')
}

const signInFailure = function (error) {
  console.error(error)
  $('#content').text('You may have entered wrong data - ' + error.statusText)
}

const signOutSuccess = () => {
  $('#result').text('Signed out successfully!!')
  $('#sign-in-register, #infoMessage').removeClass('hidden')
  $('#getKidsButton, #home, #add-kid, #add-book').addClass('hidden')
  $('#kids').html('&nbsp;')
  authHelper.setSignOutSuccessShowHide()
  clearApp()
}

const clearApp = () => {
  delete app.current_kid_id
  delete app.kids
  delete app.user
  delete app.books
}

const signOutFailure = function (error) {
  console.error(error)
  $('#result').text('Sorry, some problem signing out, please try again - ' + error.statusText)
}

const changePasswordSuccess = function () {
  $('#result').text('Password updated successfully!!')
  authHelper.setChangePasswordSuccessShowHide()
  $('#signUpModalLabel').text('Sign In / Register')
  authHelper.clearFormInputFields('change-password')
  $('#signUpModal').modal('hide')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#content').text('Password NOT changed. Please ensure you enter the correct password - ' + error.statusText)
  $('#result').text(error.statusText)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
