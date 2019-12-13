/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable consistent-return */
const showError = function (errors, field) {
  if (errors) {
    let error = errors.find(err => err.path === field);
    if (error) {
      return error.message;
    }
    return '';
  }
};

const isInvalid = (errors, field) => {
  if (errors) {
    let error = errors.find(err => err.path === field);
    if (error) {
      return 'is-invalid';
    }
    return '';
  }
};

const equals = (
  arg1,
  arg2,
  options,
) => (
  (arg1 === arg2) ? options.fn(this) : options.inverse(this));

module.exports = {
  showError,
  equals,
  isInvalid,
};
