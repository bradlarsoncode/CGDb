const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';
  data.password2 = validText(data.password2) ? data.password2 : '';
  data.ftp = true;
  data.sanity = 0;
  
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be more than 2 characters and less than 30';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Do not forget your name!';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'DO NOT LEAVE THE EMAIL FIELD EMPTY!';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'People who misspell their email get 10 shocks';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Do not forget your password!';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password needs to be at least 6 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Do not forget to confirm your password!';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords do not match.  Are you sure you\'re not crazy?';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};