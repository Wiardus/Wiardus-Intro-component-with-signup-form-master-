const form = document.forms[0]
const input = document.querySelector('input')
const firstNameError = document.getElementById('firstNameError')
const firstNameInput = document.getElementById('firstNameInput')

function formValidation () {
    if (firstNameInput.value === 0)
    firstNameError.style="display: inline"
}