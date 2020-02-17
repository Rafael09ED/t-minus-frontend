import React from 'react';
import moment from 'moment';
import { getCountdowns } from '../../util/database';
import { Container, Typography, List, ListItemText, ListItem } from '@material-ui/core';  

function CountdownList(props) {
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
    }, [props.history, props.history.length]);
    

    return (
        <div>
            <br/>
            <Container maxWidth="sm">
                <Typography variant="h4">Latest Countdowns</Typography>
                <br/>
                {jsxValues}
            </Container>
        </div>
    );
}

export default CountdownList;
