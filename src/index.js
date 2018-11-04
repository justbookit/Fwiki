import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, hashHistory} from "react-router";

import Fiki from './App';
import LandingPage from "./LandingPage";
import './index.css';

let routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Fiki} />
        <Route path="/landing-page" component={LandingPage} />
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));