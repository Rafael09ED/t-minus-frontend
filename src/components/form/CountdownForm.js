import React from 'react';
import Input from '../componenets/Input'
function CountdownForm(props) {
    const [countdownValues, setCountdownValues] = React.useState({ name: "", date:"", time: "", key:"" });
    const [eventValues, setEventValues] = React.useState([]);
    const [eventsJSX, setEventsJSX] = React.useState();

    const onChangeCountdown = (name, value) => {
        setCountdownValues({ ...countdownValues, [name]: value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        //todo: do stuff w/ event
    }
    
    const addEventForm = (event) => {
        setEventValues([...eventValues, {name:"", text:"", time:""}])
    }

    React.useEffect(() => {})

    const createEventFormsFromValues = (values) => {
        
    }

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
                <button onClick={addEventForm}>Add Event</button>
                <br/>
                {}
                <input type="submit" value="Submit" />
            </form>
            <div>

            </div>
        </div>
    );
}

export default CountdownForm;
