import React, { Component } from "react";
import { browserHistory } from "react-router";
import ReactGA from 'react-ga';

export default class FikiHeader extends Component {

    handleClick() {
        browserHistory.push({pathname: "/landing-page"});
        ReactGA.ga('send', 'event', 'GetStarted', 'Click');
    }
    
    render() {
        return (
            <div className="app-header">
                <div className="app-header-content">
                    <div className="app-title"><label className="white size-60">Welcome to <b>JustBookIt.</b> fiki!</label></div>
                    <div><button className="app-button white size-20" onClick={this.handleClick}>Go to our landing page</button></div>
                </div>
            </div>
        );
    }
}