import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App/App';

const root = (
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>
);

ReactDOM.render(root, document.getElementById('root'));
