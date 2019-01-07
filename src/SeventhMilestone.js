import React, { Component } from "react";
import app1 from './images/app1.png';
import app2 from './images/app2.png';
import app3 from './images/app3.png';
import './App.css';

export default class SeventhMilestone extends Component {
    render() {
        return (
            <div>
                <div className="milestone-container size-35 white bold-text">Milestone 7</div>

                <div className="blue-container size-16 white">
                    <div className="section-title" style={{width: "calc(100% - 330px)", margin: "auto"}}>
                        <label className="size-30 bold-text">MVP: Minimum Viable Product</label>
                    </div>

                    <div className="section-content white">
                        <p>
                            We implemented a first version of the application starting from the information collected in
                            the previous validation stages.
                        </p>

                        <p>
                             The main goal of our prototype is to see the impact of it, to identify if the users will be
                             willing to use the services offered by our application. Therefore, we decided to create for
                             the beginning a MVP which offers a minimum number of features. All these features will be
                             describe in the next section.
                        </p>

                        <div className="section-delimiter"></div>

                        <p>
                            We implemented only the “Fast booking” component, which allows the user to book a train ticket
                            even if he/she does not have an account, because it is the main component of the application
                            and it contains all the steps that an user should do to quickly reserve a train ticket. Also,
                            we decided to propose a simple design. We focused on the booking process!
                        </p>

                        <p>
                            Based on the feedback received in the validation stages, when we interviewed and questioned
                            some potential users, we chose to implement a fast booking (to reserve a train ticket an user
                            can finish the whole process in just three clicks), because they told us that they waste a lot
                            of time when they have to deal with a full sign up process.
                        </p>

                        <p>
                            The feedback received in the previous stages can be found here:
                            <a className="link-container" href="https://docs.google.com/spreadsheets/d/1NOvkivkK5_o1y0PM-vbE3euwSA8YsIbZSKqzfnBTvVA/edit?usp=sharing">
                                feedback
                            </a>
                        </p>

                        <p>
                            To understand better the whole flow we attached some pictures and we described each step in
                            the next section:
                        </p>

                        <div style={{textAlign: "center", margin: "30px"}}><img style={{width: "610px", borderRadius: "10px"}} src={app1} alt=""/></div>

                        <p>
                            <b>Step 1:</b> The first thing that an user should do to reserve one or more train tickets is to choose:
                            the departure location, the destination, the departure time, the date and the number of tickets.
                            Optionally, the user can choose to reserve tickets for the returning trip, too. In this case,
                            he/she should specify the date and the time for the returning trip.
                        </p>

                        <div style={{textAlign: "center", margin: "30px"}}><img style={{width: "610px", borderRadius: "10px"}} src={app2} alt=""/></div>

                        <p>
                            <b>Step 2:</b> After the user fills all the fields of the booking form and submits it, he/she
                            will be redirected to the next page which will list all the available trips for the day/s he/she
                            chose. To finish the booking process the user should choose the desire train and he should press
                            on the buy button.
                        </p>

                        <div style={{textAlign: "center", margin: "30px"}}><img style={{width: "450px", borderRadius: "10px"}} src={app3} alt=""/></div>

                        <p>
                            <b>Step 3:</b> After choosing the desired train, the user will be redirected to a confirmation
                            page which will list all the necessary information about the reserved tickets. From this page,
                            the user can download a pdf which contains the reserved tickets.
                        </p>

                        <div className="section-delimiter"></div>

                        <p>
                            In this moment the application contains a minimum number of routes, because our main goal is
                            to create a working application which simply showcase the main functionality of our final app,
                            which is fast ticket booking. Therefore, a fully populated database, with all the possible
                            routes available in our country was absolutely not necessary, because the users will surely
                            be able to comprehend the nature of our prototype with only a few predefined cities.
                        </p>

                        <p>
                            We didn’t focus on functionality like: authentication, addition of new routes, autocomplete,
                            student ID validation and so forth. Our goal was to create an MVP which will allow us to
                            receive feedback regarding only the booking process.
                        </p>

                        <p>
                            Also, among the suggestions we received from the interviewed people in one of the previous stages,
                            it was one that suggested us that it would be useful to offer the user the possibility to see how
                            many empty places are for a selected train. We chose not to introduce this already because it
                            requires further approval and a method of obtaining these data from the railway companies.
                            Another feature which requires additional external validation is the student ID validation.
                            In order for students to be able to book a ticket on our platform, he/she must provide a valid
                            student ID. As we do not have access to a database which will allow us to do this validation,
                            we chose not to include this aspect in our MVP.
                        </p>

                        <p>
                            We planned to develop these features in the next step together with some improvements, after
                            we will receive some new feedback from potential users after they will test this first version
                            of our application. So, we developed a simple application with a minimal functionality.
                            We worked on it for about 2 weeks.
                        </p>

                        <p>
                            To easily share our application we deployed it. The demo is available here:
                            <a className="link-container" href="http://172.104.225.95:8000/form/">demo</a>(To test it
                            you can use the following route: Bucuresti - Constanta)
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}