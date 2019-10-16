import React from 'react';
import Input from '../componenets/Input';
import  { Redirect } from 'react-router-dom'
import { createCountdown } from '../../util/database';
import moment from 'moment';

import {
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import { TextField } from '@material-ui/core';


function convertDateTimeToDatetime(date, time){
    return date + " " + time;
}

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
    const [countdownValues, setCountdownValues] = React.useState({name: "", time: getTime(), key:"" });
    const [eventValues, setEventValues] = React.useState([]);
    const [eventsJSX, setEventsJSX] = React.useState();
    const [nextId, setNextId] = React.useState(-1); // negative to represent not in database yet
    const [errors, setErrors] = React.useState()

    const onChangeCountdown = (name, value) => {
        let newValue = {...countdownValues, [name]:value};
        setCountdownValues(newValue);
    };

    const onChangeEvent = (name, value, groupId) => {
        let newValue = {...eventValues};
        newValue[groupId][name] = value;
        setEventValues(newValue);
    }

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
        setErrors(<div>
            <h3>Errors:</h3>
            <pre>{JSON.stringify(error.response.data, null, 2)}</pre>
        </div>);
    } 

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(convertCountdownValuesToAPI(countdownValues));
        createCountdown(convertCountdownValuesToAPI(countdownValues))
            .then(onSuccessfulCountdownSubmit)
            .catch(onFailToSubmitCountdown);
    }
    
    const addEventForm = (event) => {
        let newEventValues = {...eventValues};
        newEventValues[nextId] = {localId:nextId, name:"", text:"", time:""};
        setEventValues(newEventValues);
        setNextId(nextId - 1);
    }
    
    const removeEventForm = (localId) => {
        let newEventValues = JSON.parse(JSON.stringify(eventValues));
        delete newEventValues[localId];
        setEventValues(newEventValues);
    }

    React.useEffect(() => {
        let newjsx = Object.keys(eventValues).map((key, index) => {
            const event = eventValues[key];
            return (
                <div key={key}>
                    <h4>Event {index + 1}</h4>
                    Name:
                    <Input 
                        type="text"
                        name="name"
                        value={event.name}
                        onChange={onChangeEvent}
                        groupId={event.localId}
                    />
                    <br/>
                    Text:
                    <Input 
                        type="text"
                        name="text"
                        value={event.text}
                        onChange={onChangeEvent}
                        groupId={event.localId}
                    />
                    <br/>
                    Time:
                    <Input 
                        type="time"
                        name="time"
                        value={event.time}
                        onChange={onChangeEvent}
                        groupId={event.localId}
                    />
                    <button type="button" onClick={() => removeEventForm(event.localId)}>Remove Event {index + 1}</button>
                </div>
            )
        })
        setEventsJSX(newjsx);
    }, [eventValues])

    return (
        <div>
            <form onSubmit={onSubmit}>
                <TextField 
                    margin="normal"
                    label="Name"
                    value={countdownValues.name}
                    onChange={(event) => onChangeCountdown("name", event.target.value)}
                />
                <br/>
                <KeyboardDatePicker
                    margin="normal"
                    label="T-0 Date"
                    format="YYYY-MM-DD"
                    value={countdownValues.time}
                    onChange={(newValue) => onChangeCountdown("time", newValue)}
                />
                <br/>
                <KeyboardTimePicker 
                    margin="normal"
                    label="T-0 Time"
                    value={countdownValues.time}
                    onChange={(newValue) => onChangeCountdown("time", newValue)}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                      }}
                />
                <br/>
                <TextField 
                    margin="normal"
                    label="Key"
                    value={countdownValues.key}
                    onChange={(event) => onChangeCountdown("key", event.target.value)}
                    helperText="Similar to password"
                />
                <br/>
                {/*
                <h3>Events:</h3>
                {eventsJSX}
                 <button type="button" onClick={addEventForm}>Add Event</button>
                 */}
                <br/>
                {errors}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default CountdownForm;
