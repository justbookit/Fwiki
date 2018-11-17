import React, { Component } from "react";
import ReactGA from 'react-ga';

import railway from "./images/railway.jpg";
import "./LandingPage.css";
import {withRouter} from "react-router-dom";


class LandingPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: "",
            email: ""
        };

        ReactGA.initialize('UA-129216949-1');
    }

    handleClick() {
        this.setState({...this.state, message: "The application will be available soon!"})
        ReactGA.ga('send', 'event', 'GetStarted', 'Click');
    }

    render() {
        return (
            <div>
                <div className="landing-page-header">
                    <div className="header-content">
                        <div className="title"><label className="white size-75"><b>JustBookIt.</b></label></div>
                    </div>
                </div>

                <div className="landing-page-content">
                    <div className="darkblue-container white">
                        <label className="bold-text size-30">About us</label>
                        <div className="horizontal-blue-line"></div>
                        <div className="about-us-content">
                            <div className="description-container">
                                <p>We are a small group of Computer Science graduates who struggled and still
                                do with reserving free train tickets. Always in a hurry and constantly trying
                                to get the most of our times, we frequently face gruesome queues at the railway
                                tickets offices when we decide to go home or in a short trip.
                                </p>

                                <p>You are student, right?</p>
                                <p>
                                As you, we don't want to waste a lot of time, so we found a solution. We propose you
                                JustBookIt. We created it for you and for everyone like you.
                                </p>

                                <p className="motto">
                                    <b>JUST TRY IT. IT'S FREE AND IT'S AWESOME!</b>
                                </p>

                            </div>
                            <div className="picture-container"><img style={{width: "600px"}} src={railway} alt=""/></div>
                        </div>
                    </div>

                    <div className="lightgray-container">
                        <div className="our-services-title">
                            <label className="bold-text size-30 gray">Why JustBookIt?</label>
                            <hr></hr>
                        </div>

                        <div className="circles-container gray">
                            <div className="circle-container">
                                <div className="outer-circle">
                                    <div className="inner-circle">
                                        <i className="icon fas fa-users"></i>
                                    </div>
                                </div>

                                <p><b>STUDENT FRIENDLY</b></p>

                                <p>Who can use it?</p>

                                <label>
                                    The application can be used by everybody. You can reserve or buy tickets even
                                    if you are not students.
                                </label>

                                <p>
                                    Also, it's true that the main goal of our application is to offer students the
                                    possibility to buy free tickets in just a few clicks, to resolve the problem
                                    that they face everyday, the endless queues that form at the tickets offices.
                                </p>

                                <label>So, JustBookIt is student friendly!</label>
                            </div>


                            <div className="circle-container">
                                <div className="outer-circle">
                                    <div className="inner-circle">
                                        <i className="icon far fa-clock"></i>
                                    </div>
                                </div>

                                <p><b>SAVE TIME</b></p>

                                <p>
                                    Easy, fast and safe. You can buy or reserve a ticket from home or any other place in
                                    just a few minutes. The only thing that you should do is to select the destination,
                                    the date and the hour.
                                </p>

                                <label>
                                    So, it’s super fast to book a ticket from us. Just think about how much time you have
                                    left to continue being awesome!
                                </label>
                            </div>

                            <div className="circle-container">
                                <div className="outer-circle">
                                    <div className="inner-circle">
                                        <i className="icon fas fa-ticket-alt"></i>
                                    </div>
                                </div>

                                <p><b>FAST BOOKING</b></p>

                                <p>Do you wonder how our booking system works? Quite simple!</p>

                                <label>
                                    Just fill our Fast Booking form to tell us about your
                                    journey and we will do our best to offer you the best train options. Now it’s up to
                                    you to choose the one that suits your needs the best.
                                </label>

                                <p>
                                    Oh and by the way. If you do not fancy filling our form every time you book
                                    a ticket, you can create an account and save your personal information for a faster
                                    Fast Booking process.
                                </p>
                            </div>

                            <div className="circle-container">
                                <div className="outer-circle">
                                    <div className="inner-circle">
                                        <i className="icon fas fa-calendar-alt"></i>
                                    </div>
                                </div>

                                <p><b>PICK A TIME</b></p>

                                <p>
                                    We know how hard is to remember all the train routes. I believe you struggled with
                                    this problem too.
                                </p>

                                <label>Guess what? We got your back again!</label>

                                <p>
                                    Fill in our Fast Booking form the desired day and hour and we will list all the available
                                    trains that day after your specified hour.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="darkblue-container white size-30">
                        <div className="our-application-title">
                            <label><b>You travel a lot by train, but you are always in a hurry?</b></label>
                            <label className="text size-25">Save your time and try <b>JustBookIt.</b></label>
                            <div>
                                <button className="app-button white size-16" onClick={this.handleClick.bind(this)}>GET STARTED</button>
                                <div className="message-container size-15"><p><b>{this.state.message}</b></p></div>
                            </div>
                        </div>
                    </div>

                    <div className="lightgray-container gray">
                        <i className="email-icon fas fa-envelope"></i>
                        <label className="bold-text size-30">Subscribe</label>
                        <div className="horizontal-orange-line"></div>
                        <div>
                            <p className="size-16">
                                Subscribe to our newsletters and stay updated!
                            </p>
                            <form className="subscribe-container" method="POST" action="https://formspree.io/dssproject2018@gmail.com">
                                <input className="subscribe-input" value={this.state.email} type="email" name="email" placeholder="Enter your email address"
                                    onChange={(event) => this.setState({email: event.target.value})}/>
                                <button className="send-button bold-text white" type="submit" disabled={!(this.state.email !== "")}>Send</button>
                            </form>
                        </div>
                    </div>

                    <div className="darkblue-container">
                        <div className="copyright-container">
                            <i className="copyright-icon far fa-copyright"></i>
                            <label>JustBookIt. 2018 - STARTUP ENGINEERING -</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;