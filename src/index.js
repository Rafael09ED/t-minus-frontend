import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App/App';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import  { BreakpointProvider } from 'react-socks';


const root = (
  <BrowserRouter>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <BreakpointProvider>
        <Route component={App} />
      </BreakpointProvider>
    </MuiPickersUtilsProvider>
  </BrowserRouter>
);

ReactDOM.render(root, document.getElementById('root'));
