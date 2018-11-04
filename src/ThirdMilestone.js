import React, { Component } from "react";
import "./App.css";

import register from "./wireframe/register.JPG";
import login from "./wireframe/login.JPG";
import pickTrain from "./wireframe/pickTrain.JPG";
import fastBooking from "./wireframe/fastBooking.JPG";

export default class ThirdMilestone extends Component {
    render() {
        return (
            <div>
                <div className="milestone-container size-35 white bold-text">Milestone 3</div>

                <div className="blue-container size-16 white">
                    <div className="section-title"><label className="size-30 bold-text">Wireframe</label></div>
                    <div className="section-content">
                        <div className="wireframes-container">
                            {
                                [
                                    [register, "Register"],
                                    [login, "Login"],
                                    [fastBooking, "Fast booking"],
                                    [pickTrain, "Search for train"]
                                ].map((image) => {
                                    return (
                                        <div className="wireframe-image-cointainer" key={image[0]}>
                                            <div className="transparent-layer">
                                                <img className="wireframe-image" src={image[0]} onClick={() => this.props.enlargeImage(image[0])} alt=""/>
                                            </div>
                                            <p className="imageLabel"><b>{image[1]}</b></p>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <p className="blue"><b>To open an wireframe click on it!</b></p>

                        <p>
                            Before any booking, the user must search for a route by the cities between which he wants to travel and also he must chose a departure time. After this step a list with trains will be displayed and the user must chose on which he wants to book a ticket.
                        </p>
                        <p>
                            The application can be used in two ways. The user can chose for a fast booking, without having to register, in which case he has to enter
                            the additional information for the Student ID Card and the Personal ID Card. If the user already has an account, this information will
                            be auto-completed with the information that he provided in the registration step.
                        </p>

                        <p>
                            In the registration step the user must enter his name, email, phone number, the Student ID Card and the Personal ID Card and a password.
                        </p>

                    </div>
                </div>
            </div>
        );
    }
}