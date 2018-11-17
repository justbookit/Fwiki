import React, { Component } from "react";
import ReactGA from 'react-ga';
import {Link} from "react-router-dom";

export default class FikiHeader extends Component {
    
    render() {

        return (
            <div className="app-header">
                <div className="app-header-content">
                    <div className="app-title"><label className="white size-60">Welcome to <b>JustBookIt.</b> fiki!</label></div>
                    <div className='app-button'><Link to='/landing-page'>Landing page</Link></div>
                </div>
            </div>
        );
    }
}