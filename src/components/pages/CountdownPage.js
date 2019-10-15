import React from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { getCountdown } from '../../util/database';
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

momentDurationFormatSetup(moment);

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1, 2),
  },
}));

function CountdownPage(props) {
  const classes = useStyles();
  const [jsxValues, setJsxValues] = React.useState((<p>loading...</p>));
  const [countdownData, setCountdownData] = React.useState({});
  const [currentTime, setCurrentTime] = React.useState(moment());

  React.useEffect(() => {
    getCountdown(props.match.params.id)
      .then((response) => {
        setCountdownData(response.data)
      });
  }, [props.match.params.id, props.history.length]);

  React.useEffect(() => {
    setJsxValues((old_val) => {
      let countdown_time = moment(countdownData.time);
      let delta = currentTime.diff(countdown_time);
      let countdown = moment.duration(delta).format("y [years], w [weeks], d [days], h [hours], m [minutes], s [seconds]");
      let minus = false;
      if (countdown[0] === '-'){
        minus = true;
        countdown = countdown.substring(1);
      }
      return (
        <div className="countdown_timer">
          <h2>T{minus ? " - ":" + "}{countdown}</h2>
          <p>{countdownData.event_text}</p> 
        </div>
      );
    });
  }, [countdownData, currentTime])

  React.useEffect(() => {
    setTimeout(function loop(){
      setCurrentTime(moment());
    }, 1000 - ( Date.now() % 1000 ))
  }, [currentTime])

  return (
      <div className="cdtp_header">   
        <Paper elevation={0} className={classes.paper} style={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography className="countdown_timer_name">{countdownData.name}</Typography>
          <Typography><NavLink to="/" style={{ textDecoration: 'none', color:'grey' }}>t-min.us</NavLink></Typography>
        </Paper>
        {jsxValues}
      </div>
  );
}

export default CountdownPage;