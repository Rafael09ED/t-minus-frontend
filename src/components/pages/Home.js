import React from 'react';
import {NavLink} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Link = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function Home() {
  const classes = useStyles();

  return (
      <div>
          <Container maxWidth="sm">
            <Typography variant="h2" component="h3">t-min.us</Typography>
            <br/>
            <Typography variant="body1">A tool for generating countdowns</Typography>
            <br/>
            <Button component={Link} to='/list' variant="contained" className={classes.button}>List</Button>
            <Button component={Link} to='/create' variant="contained" color="primary" className={classes.button}>Create</Button>
          </Container>
      </div>
  );
}

export default Home;
