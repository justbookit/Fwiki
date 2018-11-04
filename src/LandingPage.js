import React, { Component } from "react";
import "./LandingPage.css";

export default class LandingPage extends Component {

    render() {
        return (
            <div>
                <div className="landing-page-header">
                    <div className="header-content">
                        <div className="title"><label className="white size-75"><b>JustBookIt</b></label></div>
                    </div>
                </div>

                <div className="landing-page-content">
                    <div className="about-us white">
                        <div className="bold-text size-30">About us</div>
                        <div className="horizontal-line"></div>
                        <div></div>
                    </div>

                    <div className="our-services">
                        <div className="circles-container">
                            <div className="outer-circle">
                                <div className="inner-circle">
                                    <i className="icon fas fa-users"></i>
                                </div>
                            </div>

                            <div className="outer-circle">
                                <div className="inner-circle">
                                    <i className="icon fas fa-ticket-alt"></i>
                                </div>
                            </div>

                            <div className="outer-circle">
                                <div className="inner-circle">
                                    <i class="icon fas fa-calendar-alt"></i>
                                </div>
                            </div>

                            <div className="outer-circle">
                                <div className="inner-circle">
                                    <i class="icon far fa-clock"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="our-application"></div>

                    <div className="contact-us"></div>
                </div>
            </div>
        );
    }
}