import { Box, Button, Grid, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import * as modalAction from './../../actions/modal';
import styles from './styles';
import validate from './validate';
import renderTextField from '../../components/FormHelper/TextField';
class TaskForm extends Component {
  handleSubmitForm = data => {};

  required = value => {
    let error = 'Vui long nhap tieu de';
    if (value !== null && typeof value !== 'undefined' && value.trim() !== '') {
      error = null;
    }
    return error;
  };

  minlength = (value = '') => {
    let error = null;
    if (value.length < 5) {
      error = 'Tieu de phai tu 5 ky tu';
    }
    return error;
  };

  render() {
    const {
      classes,
      modalActionCreator,
      handleSubmit,
      invalid,
      submitting,
    } = this.props;
    const { hideModal } = modalActionCreator;

    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item md={12}>
            {/* <TextField
              id="standard-name"
              label="Name"
              className={classes.textField}
              margin="normal"
            /> */}
            <Field
              id="title"
              label="Tieu de"
              className={classes.textField}
              margin="normal"
              name="title"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            {/* <TextField
              id="standard-name"
              label="Name"
              className={classes.textField}
              margin="normal"
            /> */}
            <Field
              id="description"
              label="Mo ta"
              className={classes.textField}
              margin="normal"
              multiline
              rowsmax="4"
              name="description"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Box ml={1}>
                <Button variant="contained" onClick={hideModal}>
                  Huy bo
                </Button>
              </Box>
              <Button
                disabled={invalid || submitting}
                variant="contained"
                color="primary"
                mr={2}
                type="submit"
              >
                Luu Lai
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  modalActionCreator: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
  return {
    modalActionCreator: bindActionCreators(modalAction, dispatch),
  };
};
const FORM_NAME = 'TASK_MANAGEMENT';
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});
export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(TaskForm);
