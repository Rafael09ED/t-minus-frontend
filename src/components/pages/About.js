import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
}));
  

function About() {
    const classes = useStyles();


    return (
      <Container maxWidth="sm">
        <Box m={6} /> 
        <Paper className={classes.root}>
            <Typography variant="h3">
                About <span style={{whiteSpace:"nowrap"}}>t-min.us</span>
            </Typography>
            <br/>
            <Typography variant="body1">
                t-minus is the personal project of <Link href="http://rafaeldejesus.com">Rafael DeJesus</Link>, a CS student at Clemson University. 
            </Typography>
            <Typography variant="body1">
                The site is inspired from the <Link href="https://en.wikipedia.org/w/index.php?title=User:MrScorch6200/sandbox/thesurvivor2299.com">"Survivor 2299" Fallout release hoax</Link> where a countdown hinting at a release annoucement to the Fallout video game series.  As the time ticked down, the website gave different messages causing hysteria as fans tried to figure out what the messages meant.
            </Typography>
            <Typography variant="body1">
                This site is a work in progress. Feel free to contact me with any feedback.   
            </Typography>
        </Paper>
      </Container>
  );
}

export default About;
