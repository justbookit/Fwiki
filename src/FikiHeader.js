import React, { Component } from "react";
import { browserHistory, hashHistory } from "react-router";

export default class FikiHeader extends Component {

    handleClick() {
        hashHistory.push({pathname: "/landing-page"});
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