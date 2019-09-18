import { ThemeProvider, withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from '../../commons/Theme/index';
import GlobalLoading from '../../components/GlobalLoading';
import CommonModal from './../../components/Modal';
import TaskBoard from './../../containers/Taskboard';
import configureStore from './../../redux/configureStore';
import styles from './styles';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <GlobalLoading />
          <CommonModal />
          <TaskBoard />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
