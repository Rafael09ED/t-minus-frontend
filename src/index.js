import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App/App';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';


const root = (
  <BrowserRouter>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Route component={App} />
    </MuiPickersUtilsProvider>
  </BrowserRouter>
);

ReactDOM.render(root, document.getElementById('root'));
