import React, { Component } from "react";
import "./App.css";

export default class SecondMilestone extends Component {
    render() {
        return (
            <div>
                <div className="milestone-container size-35 white bold-text">Milestone 2</div>

                <div className="blue-container size-16 white">
                    <div className="section-title"><label className="size-30 bold-text">How we identified the problem</label></div>
                    <div className="section-content">
                        <p>We frequently use the services offered by the railway companies. The train is our choice when we decide to go
                        home or in a trip. As students we are given a discount, and the only way to use it is to purchase tickets
                        from a railway tickets office.
                        We face the problem mentioned in the previous paragraph when we want to use CFR’s services. When purchasing tickets,
                        it is always crowded and people, in general, tend to blame the students for this problem because they can purchase
                        tickets for free.
                        </p>
                    </div>
                </div>

                <div className="gray-container size-16 gray">
                    <label className="size-30 bold-text">What we thought is a solution for the problem</label>
                    <div className="section-content">
                        <p>The solution we propose is to reduce the crowded areas by offering a possibility for students to order tickets
                        online. People can purchase online tickets but without discounts. So we want to make a platform where people can
                        still purchase tickets online but also where, people with discounts, can make an use of that.
                        </p>
                    </div>
                </div>

                <div className="blue-container size-16 white">
                    <div className="section-title"><label className="size-30 bold-text">Our plan for customer discovery</label></div>
                    <div className="section-content">
                        <p>Firstly, we want to target the students because we think they are more open to technology use. But our 
                        platform isn’t exclusive for students and our customer segment might be any person who uses trains and
                        has an internet connection.
                        </p>

                        <p>Secondly, we need to see if people are accepting our idea and would use our service, that the train
                        companies would be interested in our work and maybe help us with funds.
                        </p>

                        <div className="title-container">
                            <label className="size-20 bold-text">How we identified our customer segment | How we reached them
                            | How we collected information from them</label>
                        </div>

                        <p>We focused on students who travel by train and we approached most of them via online questionnaires.</p>

                        <p>We asked around 100 people about any existing problems about train’s ticket commercialisation and more
                        than 90% said that the actual system costs them a lot of time, because they have to go to the special points
                        of buying tickets. More than half said that the personnel that sells tickets isn’t always polite and more
                        than 75% can’t buy online tickets with the same discount as the selling points. 
                        </p>

                        <p>The questions were:</p>
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