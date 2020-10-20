
const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'People who misspell their email get 10 shocks'; 
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'DO NOT LEAVE THE EMAIL FIELD EMPTY!';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Do not forget your password!";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};