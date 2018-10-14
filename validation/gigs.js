const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateGigsInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.venue = !isEmpty(data.venue) ? data.venue : "";
  data.date = !isEmpty(data.date) ? data.date : "";
  data.time = !isEmpty(data.time) ? data.time : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  if (Validator.isEmpty(data.venue)) {
    errors.venue = "Venue field is required";
  }

  if (Validator.isEmpty(data.date)) {
    errors.date = "Date field is required";
  }

  if (Validator.isEmpty(data.time)) {
    errors.time = "Time field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
