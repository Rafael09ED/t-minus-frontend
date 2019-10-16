import React from 'react';
import CountdownForm from '../form/CountdownForm';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));
  

function CountdownCreate() {
    const classes = useStyles();

    return (
        <div>
            <Box m={6} /> 
            <Container maxWidth="sm" >
                <Paper className={classes.root}>
                    <Typography variant="h5" component="h3">Create Countdown</Typography>
                    <CountdownForm />
                </Paper>
            </Container>
        </div>
    );
}

export default CountdownCreate;
