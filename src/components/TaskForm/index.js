import { Button, Grid, Modal, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';

class TaskForm extends Component {
  render() {
    const { open, classes, onClose } = this.props;

    return (
      <Modal open={open} onClose={onClose}>
        <div className={classes.modal}>
          <form>
            <Grid container>
              <Grid item md={8}>
                <TextField
                  id="standard-name"
                  label="Name"
                  className={classes.textField}
                  margin="normal"
                />
              </Grid>
              <Grid item md={8}>
                <TextField
                  id="standard-name"
                  label="Name"
                  className={classes.textField}
                  margin="normal"
                />
              </Grid>
              <Grid item md={12}>
                <Button>Luu Lai</Button>
                <Button onClick={onClose}>Huy bo</Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Modal>
    );
  }
}

export default withStyles(styles)(TaskForm);
