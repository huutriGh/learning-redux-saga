import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import styles from './styles';

class TaskItem extends Component {
  render() {
    const { classes, task, status, onClickEdit } = this.props;
    const { title } = task;
    return (
      <Card key={task.id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
            <p>{task.description}</p>
          </Grid>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab
            color="primary"
            aria-label="edit"
            className={classes.fab}
            size="small"
            onClick={onClickEdit}
          >
            {/* <AddIcon /> */}
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab
            size="small"
            color="secondary"
            aria-label="delete"
            className={classes.fab}
          >
            {/* <EditIcon /> */}
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}
export default withStyles(styles)(TaskItem);
