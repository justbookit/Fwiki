import React, { Component } from "react";
import feedback1 from './images/feedback1.png';
import feedback2 from './images/feedback2.png';
import feedback3 from './images/feedback3.png';
import piechart from './images/piechart.png';
import './App.css';

export default class EighthMilestone extends Component {
    render() {
        return (
            <div>
                <div className="milestone-container size-35 white bold-text">Milestone 8</div>

                <div className="blue-container size-16 white">
                    <div className="section-title" style={{width: "calc(100% - 330px)", margin: "auto"}}>
                        <label className="size-30 bold-text">First Sale</label>
                    </div>

                    <div className="section-content white">
                        <p>
                            After we developed a working prototype we shared it to a number of 17 students (our main customer
                            segment). We asked them to play around with our booking system and encouraged them to fill a
                            feedback afterwards and give us their most sincere feedback, in order to allow us to fix any
                            issues detected by them, to identify some new useful features or some improvements that are
                            needed starting from their feedback.
                        </p>

                        <p>
                            To encourage the student to test our application and to give us a feedback we decided to deploy
                            the MVP to be easier for us to share it and to be easier for students to test it. So, we sent
                            some directly messages to some students, colleagues and friends to obtain some feedback from them.
                        </p>

                        <div className="size-25"><b>Feedback form</b></div>

                        <p>
                            As we mentioned above, to collect the potential users feedback we created a form. The questions
                            we decided to include in our feedback form are the following:
                        </p>

                        <ul>
                            <li>How much did you enjoy JustBookIt?</li>
                            <li>What aspects of JustBookIt did you find most pleasing?</li>
                            <li>What aspects of JustBookIt did you find disturbing?</li>
                            <li>What improvements/changes would you implement for JustBookIt?</li>
                            <li>How did you find JustBookIts’ booking system?</li>
                            <li>What booking method is the one you use most often?</li>
                            <li>For the aforementioned method, how much faster or slower do you find the booking method
                             provided by JustBookIt?</li>
                        </ul>

                        <p>
                            The form we used can be found
                            <a className="link-container" href="https://docs.google.com/forms/d/1rWL77SPlrIHjc9ImxiX_a7EqSP1qaG_DXi5yN7pZwM0">
                                here
                            </a>
                        </p>

                        <div className="size-25"><b>Results</b></div>

                        <p>
                            Until now, the feedback form was completed by 17 students. Based on the results displayed in the
                            following piechart, about 52.9% said that the booking process is easy and 47.1% said that it is
                            relatively easy. This means that we succeeded to implement a fast booking process, but it is not
                            enough. We need to improve the process to increase the the quality of user experience.
                        </p>

                        <div style={{textAlign: "center", margin: "30px"}}><img style={{width: "610px", borderRadius: "10px"}} src={piechart} alt=""/></div>


                        <p>
                            Therefore, we analyzed all the feedbacks added by the questioned students and we extracted the relevant ones.
                            We identified both pros and cons.
                        </p>

                        <label><b>PROS</b></label>

                        <ul>
                            <li>It easy to use and it has a simple and an intuitive design</li>
                            <li>The booking process is fast</li>
                            <li>Reduce the time spent at queues on railway tickets offices</li>
                        </ul>

                        <label><b>CONS</b></label>

                        <ul>
                            <li>The application contains some ambiguities fields (example: the field for the number of tickets)</li>
                            <li>The format of the generated train ticket</li>
                            <li>It is not optimized for smartphones</li>
                        </ul>

                        <p>
                            All the results can be checked
                            <a className="link-container" href="https://docs.google.com/forms/d/1rWL77SPlrIHjc9ImxiX_a7EqSP1qaG_DXi5yN7pZwM0/edit?fbclid=IwAR2qG6koypIokqrsNkYWQ1GQV40vf2z9rnCehAi_OLPncJAYrMzyHsajOd4#responses">
                                here
                            </a>
                        </p>

                        <p>
                            Also, we asked them for some improvements/changes. We receive some useful suggestions that will
                            help us to improve the current version and to easily identify the users requirements.
                            We added some relevant ones:
                        </p>

                        <div style={{textAlign: "center", margin: "30px"}}><img style={{width: "610px", borderRadius: "10px"}} src={feedback1} alt=""/></div>
                        <div style={{textAlign: "center", margin: "30px"}}><img style={{width: "610px", borderRadius: "10px"}} src={feedback2} alt=""/></div>
                        <div style={{textAlign: "center", margin: "30px"}}><img style={{width: "610px", borderRadius: "10px"}} src={feedback3} alt=""/></div>

                        <p>
                            All this feedbacks helped us to understand better the user requirements. To increase the quality
                            of the user experience and the usability of the application we will take into account all these
                            feedbacks.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}