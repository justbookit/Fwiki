import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from "react-router";
import {BrowserRouter, Switch} from 'react-router-dom'

import App from './App';
import './index.css';

ReactDOM.render((
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App/>
        </BrowserRouter>
), document.getElementById('root'));