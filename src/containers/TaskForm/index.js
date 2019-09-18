import { Box, Button, Grid, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as modalAction from './../../actions/modal';
import styles from './styles';
class TaskForm extends Component {
  render() {
    const { classes, modalActionCreator } = this.props;
    const { hideModal } = modalActionCreator;

    return (
      <form>
        <Grid container>
          <Grid item md={12}>
            <TextField
              id="standard-name"
              label="Name"
              className={classes.textField}
              margin="normal"
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              id="standard-name"
              label="Name"
              className={classes.textField}
              margin="normal"
            />
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Box ml={1}>
                <Button variant="contained" onClick={hideModal}>
                  Huy bo
                </Button>
              </Box>
              <Button variant="contained" color="primary" mr={2}>
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
};

TaskForm.propTypes = {
  classes: PropTypes.object,
  modalActionCreator: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
  return {
    modalActionCreator: bindActionCreators(modalAction, dispatch),
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withStyles(styles),
  withConnect,
)(TaskForm);
