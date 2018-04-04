import React from 'react';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import Form from './Form';
import Profiledata from './Profiledata';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PainoData from "./PainoData";

const App = appProps => (
    <Router>
        <Switch>
        <Route exact name="index" path="/" component={Home}/>
        <Route exact path="/profile" component={Profile}/>
            <Route exact path="/form" component={Form}/>
        <Route exact path="/profiledata" component={Profiledata}/>
            <Route exact path="/painodata" component={PainoData}/>
        </Switch>
    </Router>
);

export default App;
