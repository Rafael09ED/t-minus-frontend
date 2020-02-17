import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from '../pages/Home';
import About from '../pages/About';
import CountdownPage from '../pages/CountdownPage';
import CountdownCreate from '../pages/CountdownCreate';
import CountdownList from '../pages/CountdownList';
import NavBar from '../NavBar/NavBar';

function App() {
  return (
    <React.Fragment>
      <Route path={'/'} exact component={NavBar} />
      <Route path={'/:path'} component={NavBar} />
      <Route path={'/'} exact component={Home} />
      <Route path={'/list'} exact component={CountdownList} />
      <Route path={'/about'} exact component={About} />
      <Route path={'/create'} exact component={CountdownCreate} />
      <Route path={'/-/:id'} exact component={CountdownPage} />
    </React.Fragment>
  );
}

export default App;
