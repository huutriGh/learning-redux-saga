/* eslint-disable react/jsx-props-no-spreading */
import TextField from '@material-ui/core/TextField';
import React from 'react';
import PropTypes from 'prop-types';
const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

renderTextField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  custom: PropTypes.object,
};
export default renderTextField;
