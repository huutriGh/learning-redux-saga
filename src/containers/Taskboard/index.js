import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TaskForm from '../../containers/TaskForm';
import TaskList from '../../components/TaskList/index';
import { STATUSES } from '../../constants/index';
import * as modalActions from './../../actions/modal';
import * as taskActions from './../../actions/task';
import SearchBox from './../../components/SearchBox/index';
import styles from './styles';

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

  handleEditTask = task => {
    const { taskActionCreators, modalActionCreators } = this.props;
    const { setTaskEditing } = taskActionCreators;
    const {
      showModal,
      changeModalContent,
      changeModalTile,
    } = modalActionCreators;
    setTaskEditing(task);
    showModal();
    changeModalTile('Cap nhat cong viec');
    changeModalContent(<TaskForm />);
  };

  renderBoard = () => {
    const { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map(status => {
          const taskFilter = listTask.filter(
            task => task.status === status.value,
          );

          return (
            <TaskList
              tasks={taskFilter}
              status={status}
              key={status.value}
              onClickEdit={this.handleEditTask}
            />
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
    const { modalActionCreators, taskActionCreators } = this.props;
    const { setTaskEditing } = taskActionCreators;
    setTaskEditing(null);
    const {
      showModal,
      changeModalContent,
      changeModalTile,
    } = modalActionCreators;
    showModal();
    changeModalTile('Them moi cong viec');
    changeModalContent(<TaskForm />);
  };

  renderForm = () => {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  };

  handleFilter = event => {
    const { value } = event.target;
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  };

  renderSearchBox = () => {
    let xhtml = null;
    xhtml = <SearchBox handleChange={this.handleFilter} />;
    return xhtml;
  };

  loadData = () => {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.loadData}
          style={{ marginRight: 20 }}
        >
          Load Data
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon />
          Add New Task
        </Button>
        {this.renderSearchBox()}
        {this.renderBoard()}
      </div>
    );
  }
}

Taskboard.propTypes = {
  classes: PropTypes.object,
  taskActions: PropTypes.shape({
    fetchListTaskRequest: PropTypes.func,
    filterTask: PropTypes.func,
    setTaskEditing: PropTypes.func,
  }),
  modalActions: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalContent: PropTypes.func,
    changeModalTile: PropTypes.func,
  }),
  listTask: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    listTask: state.task.listTask,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch),
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};
export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Taskboard),
);
