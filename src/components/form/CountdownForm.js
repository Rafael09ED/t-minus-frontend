import React from 'react';
import Input from '../componenets/Input';
import  { Redirect } from 'react-router-dom'
import { createCountdown } from '../../util/database';
import moment from 'moment';

import {
    KeyboardTimePicker,
    KeyboardDatePicker,
    KeyboardDateTimePicker
  } from '@material-ui/pickers';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

function convertCountdownValuesToAPI(values){
    return {
        name: values.name,
        key: values.key,
        time: values.time.format()
    }
}

function getTime(){
    return moment();
}

function CountdownForm(props) {
    const [countdownValues, setCountdownValues] = React.useState({name: "", time: getTime(), key:"key" });

    const [nextId, setNextId] = React.useState(-1); // negative to represent not in database yet
    const [errors, setErrors] = React.useState()

    const onChangeCountdown = (name, value) => {
        let newValue = {...countdownValues, [name]:value};
        setCountdownValues(newValue);
    };

    const onSuccessfulCountdownSubmit = (response) => {
        const countdownKey = response.data.id;
        setErrors(null);
        console.log(response.data)
        /* Object.keys(eventValues)
            .forEach(() => {
                //todo: add events and redirect to countdown
            }) */
        const url = '/-/' + countdownKey ;
        setErrors(<Redirect to={url}/>)
        
    }

    const onFailToSubmitCountdown = (error) => {
        if (error.response) {
            setErrors(<div>
                <h3>Errors:</h3>
                <pre>{JSON.stringify(error.response.data, null, 2)}</pre>
            </div>);
        } else {
            setErrors(<div>
                 <h3>Errors:</h3>
                 <p>No Connection To Server</p>
            </div>)
        }
            
    } 

    const onSubmit = (event) => {
        if (event) event.preventDefault();
        console.log(convertCountdownValuesToAPI(countdownValues));
        createCountdown(convertCountdownValuesToAPI(countdownValues))
            .then(onSuccessfulCountdownSubmit)
            .catch(onFailToSubmitCountdown);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <TextField 
                    margin="normal"
                    label="Title"
                    value={countdownValues.name}
                    onChange={(event) => onChangeCountdown("name", event.target.value)}
                    fullWidth
                />
                <br/>
                <KeyboardDateTimePicker
                    margin="normal"
                    label="Epoch"
                    format="MM/DD/YYYY @ hh:mm a"
                    value={countdownValues.time}
                    onChange={(newValue) => onChangeCountdown("time", newValue)}
                    fullWidth
                />
                <br/>
                {errors}
                <Button type="submit" variant="contained" color="primary" onClick={onSubmit}>
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default CountdownForm;
