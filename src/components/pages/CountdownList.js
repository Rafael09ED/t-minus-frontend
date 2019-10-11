import React from 'react';
import moment from 'moment';
import { getCountdowns } from '../../util/database';
import { NavLink } from 'react-router-dom';


function CountdownList(props) {
    const [jsxValues, setJsxValues] = React.useState((<p>loading...</p>));
    React.useEffect(() => {
        getCountdowns()
            .then((response) => {
                //todo: handle bad response, fix timezone
                setJsxValues(response.data.map((countdownJson) => {
                    return (
                        <div key={countdownJson.id}>
                            <NavLink to={`/-/${countdownJson.id}`}>{countdownJson.name}</NavLink>
                            <span> - {moment(countdownJson.time).format('LLLL')}</span>
                        </div>
                    );
                }))
            })
    }, [props.history.length]);
    

    return (
        <div>
            <p>Countdowns</p>
            {jsxValues}
        </div>
    );
}

export default CountdownList;
