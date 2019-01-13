import React, { Component } from "react";
import "./App.css";

import wapp from "./images/wapp.JPG";
import q1 from "./images/q1.JPG";
import q2 from "./images/q2.JPG";
import r1 from "./images/r1.JPG";
import r2 from "./images/r2.JPG";

export default class SecondMilestone extends Component {
    render() {
        return (
            <div>
                <div className="milestone-container size-35 white bold-text">Milestone 2</div>

                <div className="blue-container size-16 white">
                    <div className="section-title"><label className="size-30 bold-text">How we identified the problem</label></div>
                    <div className="section-content">
                        <p>At first, we identified the problem as individuals. We frequently use the services offered by the railway companies. The train is our choice when we decide to go home or in a trip. As students we are given a discount, and the only way to use it is to purchase tickets from a railway tickets office. We face the problem mentioned in the previous paragraph when we want to use CFR’s services. When purchasing tickets, it is always crowded and people, in general, tend to blame the students for this problem because they can purchase tickets for free.</p>
                        <p>fter we faced the problem we start a questionnaire, available here <a style={{color: "black"}} href="https://goo.gl/forms/pzhMKOv5r2BT0H0x2">https://goo.gl/forms/pzhMKOv5r2BT0H0x2</a>,  to see if the problem we face is met but other people as well. The results, which are available here <a style={{color: "black"}} href="https://docs.google.com/spreadsheets/d/1NOvkivkK5_o1y0PM-vbE3euwSA8YsIbZSKqzfnBTvVA/edit#gid=948342061">https://docs.google.com/spreadsheets/d/1NOvkivkK5_o1y0PM-vbE3euwSA8YsIbZSKqzfnBTvVA/edit#gid=948342061</a> , showed that most of the person which completed the questionnaire, 97 out of 104, said that they lose too much time at the railway tickets offices. When we asked them why they don’t purchase tickets online, 82 out of 104 are given a discount which is not available in online purchase.</p>

                    </div>
                </div>

                <div className="gray-container size-16 gray">
                    <label className="size-30 bold-text">What we thought is a solution for the problem</label>
                    <div className="section-content">
                        <p>The solution we propose is to reduce the crowded areas by offering a possibility for students to order tickets online. People can purchase online tickets but without discounts. So we want to make a platform where people can still purchase tickets online but also where, people with discounts, can make an use of that.</p>
                        <p>From what we learnt about this problem, from the railway companies’ point of view, the problem is that the students need to present a badge(legitimatie “an act from their university?”) and an identity card. So we think that our application will have support to introduce the required informations from this documents and if the people log in our application they can save this information in order to not introduce them every time they book a ticket.</p>
                    </div>
                </div>

                <div className="blue-container size-16 white">
                    <div className="section-title"><label className="size-30 bold-text">Our plan for customer discovery</label></div>
                    <div className="section-content">
                        <p>As we specified in the previous milestone, the main customer segment that we are targeting consists of students. So, we decided to create an online form with some relevant questions to collect feedback from them and to discover what they think about our solution and to discuss directly with our colleagues and friends about our idea to see if they are interested or not.</p>

                        <p>Also, we contacted some railway companies to see if they are willing to use our solution. So, we sent some emails in which we described our idea.</p>

                        <div className="title-container">
                            <label className="size-20 bold-text">How we identified our customer segment | How we reached them
                            | How we collected information from them</label>
                        </div>

                        <p>We focused on students who travel by train and we approached most of them via online questionnaires. We asked people who were in online groups with a lot of students to distribute our questionnaire. </p>

                        <div style={{textAlign: "center", marginBottom: "30px"}}>
                            <img style={{height: "410px"}} src={wapp} alt=""/>
                        </div>

                        <p>We asked around 100 people about any existing problems about train’s ticket commercialisation and more
                        than 90% said that the actual system costs them a lot of time, because they have to go to the special points
                            of buying tickets. </p>

                        <div style={{textAlign: "center", marginBottom: "30px"}}>
                            <img style={{height: "410px"}} src={q1} alt=""/>
                        </div>

                        <p>More than half said that the personnel that sells tickets isn’t always polite and more
                        than 75% can’t buy online tickets with the same discount as the selling points. 
                        </p>

                        <div style={{textAlign: "center", marginBottom: "30px"}}>
                            <img style={{height: "410px"}} src={q2} alt=""/>
                        </div>

                        <p>The questions are available here  <a style={{color: "black"}} href="https://goo.gl/forms/pzhMKOv5r2BT0H0x2">https://goo.gl/forms/pzhMKOv5r2BT0H0x2</a> and we wanted to see:</p>
                        <ul>
                            <li>if they use the train, how they buy tickets</li>
                            <li>if they have any problems in ticket purchasing</li>
                            <li>if they tried to buy tickets online</li>
                            <li>if they have a type of discount which can be translated as in which segment of people are you</li>
                        </ul>

                        <p>Then, we decided to get in touch with some officials from CFR, the train company with most visibility and
                        coverage in country. We sent messages to several individuals, but at the moment, only one person answered
                        back, stating that our idea might render quite useful.
                        </p>
                    </div>
                </div>

                <div className="gray-container size-16 gray">
                    <label className="size-30 bold-text">How these insights have affected our product</label>
                    <div className="section-content">
                        <p>Altough we got feedback regarding our idea from just only one CFR official, the feedback was positive,
                        as stated in the previous section. In conclusion, we are entitled to believe that, for the moment, until
                        we receive further feedback, our product will not suffer modifications.
                        </p>

                        <div style={{textAlign: "center", marginBottom: "30px"}}>
                            <img style={{height: "410px"}} src={r1} alt=""/>
                        </div>

                        <div style={{textAlign: "center", marginBottom: "30px"}}>
                            <img style={{height: "410px"}} src={r2} alt=""/>
                        </div>

                    </div>
                </div>

                <div className="blue-container size-16 white">
                    <div className="section-content">
                        <div className="title-container">
                            <label className="size-20 bold-text">Do you consider that you are ready to move to the Customer Validation stage?</label>
                        </div>

                        <p>Until now, we discussed about the idea, if it resolves an actual problem that many people face with it
                        and the answers of interviewed people was positive.
                        </p>

                        <p>So, we think that we are ready to move to the Customer Validation stage to discover if the potential
                        customers consider that our application is useful and to see if they want to support our idea.
                        We contacted some potential customers, we received a positive feedback but we need more than one to decide
                        if our idea can be validated or not. We will continue to contact the potential customers, to obtain more
                        points of view about our idea.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}