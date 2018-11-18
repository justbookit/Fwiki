import React, { Component } from "react";

export default class FikiHeader extends Component {

    handleClick() {
        window.location.href = "https://justbookit.github.io/landing-page/";
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