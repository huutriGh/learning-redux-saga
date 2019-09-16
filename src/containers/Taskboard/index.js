import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList/index';
import { STATUSES } from '../../constants/index';
import * as taskActions from './../../actions/task';
import styles from './styles';

const listTask = [
  {
    id: 1,
    title: 'Read Book',
    description: 'Read material ui book',
    status: 0,
  },
  {
    id: 2,
    title: 'Play Football',
    description: 'With my friend',
    status: 1,
  },
  {
    id: 3,
    title: 'Play game',
    description: '',
    status: 2,
  },
];
class Taskboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }

  renderBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map(status => {
          const taskFilter = listTask.filter(
            task => task.status === status.value,
          );
          return (
            <TaskList tasks={taskFilter} status={status} key={status.value} />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  renderForm = () => {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon />
          Add New Task
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

Taskboard.propTypes = {
  classes: PropTypes.object,
  taskActions: PropTypes.shape({
    fetchListTask: PropTypes.func,
  }),
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch),
  };
};
export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Taskboard),
);
