import React from 'react';
import Input from '../componenets/Input';
import  { Redirect } from 'react-router-dom'
import { createCountdown } from '../../util/database';
import moment from 'moment';

function convertDateTimeToDatetime(date, time){
    return date + " " + time;
}

function convertCountdownValuesToAPI(values){
    return {
        name: values.name,
        key: values.key,
        time: convertDateTimeToDatetime(values.date, values.time)
    }
}

function getCurrentDate(){
    return moment().format("YYYY-MM-DD");
}

function getTime(){
    return moment().format("HH:mm");
}

function CountdownForm(props) {
    const [countdownValues, setCountdownValues] = React.useState({ name: "", date:getCurrentDate(), time: getTime(), key:"" });
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
                <label>
                    Countdown Name:
                    <Input 
                        type="text"
                        name="name"
                        value={countdownValues.name}
                        onChange={onChangeCountdown}
                    />
                </label>
                <br/>
                <label>
                    T-0 Date:
                    <Input 
                        type="date" 
                        name="date" 
                        value={countdownValues.date}
                        onChange={onChangeCountdown}
                    />
                </label>
                <br/>
                <label>
                    T-0 Time:
                    <Input 
                        type="time" 
                        name="time" 
                        value={countdownValues.time}
                        onChange={onChangeCountdown}
                    />
                </label>
                <br/>
                <label>
                    Edit Key (similar to password):
                    <Input 
                        type="text"
                        name="key" 
                        value={countdownValues.key}
                        onChange={onChangeCountdown}
                    />
                </label>
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
