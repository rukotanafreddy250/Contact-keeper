import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Home from './component/pages/Home';
import About from './component/pages/About';
import { Contacts } from './component/contacts/Contacts';

import ContactState from './component/context/ContactState';

import './App.css';
 
const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment className="App">
        <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component = {Home}  />
              <Route exact path='/about' component = {About}  />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
}

export default App;
