const Validator = require('validator');
const isEmpty = require('./is-Empty');

module.exports = function validateSearchInput(data) {
  let errors = {};

  data.search = !isEmpty(data.search) ? data.search : '';

  if(Validator.isEmpty(data.search)) {
    errors.search = 'What would you like to look for?';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}