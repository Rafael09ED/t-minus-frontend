import React from 'react';
import moment from 'moment';
import { getCountdowns } from '../../util/database';
import { NavLink } from 'react-router-dom';
import { Container, Paper, Typography, List, ListItemText, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
}));
  

function CountdownList(props) {
    const classes = useStyles();

    const [jsxValues, setJsxValues] = React.useState((<p>loading...</p>));
    React.useEffect(() => {
        getCountdowns()
            .then((response) => {
                //todo: handle bad response, fix timezone
                var listItems = response.data.map((countdownJson) => {
                    return (
                        <ListItem button onClick={
                                    (event) => {
                                        props.history.push(`/-/${countdownJson.id}`)
                                    }
                                }>
                            <ListItemText 
                                key={countdownJson.id} 
                                primary={countdownJson.name}
                                secondary={moment(countdownJson.time).format('LLLL')}
                                
                            />
                        </ListItem>
                    );
                })
                setJsxValues(<List dense={true}>
                    {listItems}
                </List>)
            })
    }, [props.history.length]);
    

    return (
        <div>
            <br/>
            <Container maxWidth="sm">
                <Paper className={classes.root}>
                    <Typography variant="h4">Countdowns</Typography>
                    <br/>
                    {jsxValues}
                </Paper>
            </Container>

        </div>
    );
}

export default CountdownList;
