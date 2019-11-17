/* eslint-disable func-names */
/* eslint-disable consistent-return */
const showError = function (errors, field) {
  let mensagem;
  if (typeof errors !== 'undefined') {
    errors.forEach((error) => {
      if (error.path === field) {
        mensagem = error.message;
      }
    });
    return mensagem;
  }
};

const equals = (
  arg1,
  arg2,
  options,
) => (
  (arg1 === arg2) ? options.fn(this) : options.inverse(this));

module.exports = { showError, equals };
