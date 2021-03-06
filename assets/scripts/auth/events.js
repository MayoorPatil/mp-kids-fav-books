'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')
const authHelper = require('./helper')

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignUpToggle = function (event) {
  event.preventDefault()
  authHelper.setSignUpToggleShowHide()
}

const onSignInToggle = function (event) {
  event.preventDefault()
  authHelper.setSignInToggleShowHide()
}

const onChangePwdButton = function (event) {
  $('#result').text('')
  event.preventDefault()
  authHelper.setOnChangePwdShowHide()
}

const onSignInRegister = function (event) {
  event.preventDefault()
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#sign-up, #sign-in-toggle, #sign-in-toggle-text, #change-password').addClass('hidden')
  $('#sign-in, #sign-up-toggle, #sign-up-toggle-text').removeClass('hidden')
  $('#signUpModalLabel').text('Sign In / Register')
  $('#content').text('Informational messages will be displayed here...')
}

const addAuthHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-up-toggle').on('click', onSignUpToggle)
  $('#sign-in-toggle').on('click', onSignInToggle)
  $('#change-pwd-btn').on('click', onChangePwdButton)
  $('#sign-in-register').on('click', onSignInRegister)
}

module.exports = {
  addAuthHandlers
}
