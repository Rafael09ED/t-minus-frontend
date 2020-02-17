import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function About() {
    return (
      <div>
        <br/>
        <Container maxWidth="sm">
          <Typography variant="h4">
              About <span style={{whiteSpace:"nowrap"}}>t-min.us</span>
          </Typography>
          <br/>
          <Typography variant="body1">
              t-min.us is the personal project of <Link href="http://rafaeldejesus.com">Rafael DeJesus</Link>, a CS student at Clemson University. 
          </Typography>
          <Typography variant="body1">
              The site is inspired from the <Link href="http://archive.is/QOHKV">"Survivor 2299" Fallout release hoax</Link> where a countdown hinting at a release annoucement to the Fallout video game series.  As the time ticked down, the website gave different messages causing hysteria as fans tried to figure out what the messages meant.
          </Typography>
          <Typography variant="body1">
              This site is a work in progress. Feel free to contact me with any feedback.   
          </Typography>
          <Typography variant="body1">
          <Link href="https://github.com/Rafael09ED/t-minus-frontend">Github</Link>   
          </Typography>
        </Container>
      </div>
  );
}

export default About;
