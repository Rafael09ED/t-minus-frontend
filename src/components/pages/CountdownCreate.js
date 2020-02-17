import React from 'react';
import CountdownForm from '../form/CountdownForm';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

function CountdownCreate() {
    return (
        <div>
          <br/>
          <Container maxWidth="sm">
            <Typography variant="h4" component="h3">Create Countdown</Typography>
            <CountdownForm />
          </Container>
        </div>
    );
}

export default CountdownCreate;
