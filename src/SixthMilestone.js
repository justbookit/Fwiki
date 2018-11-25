import React, { Component } from "react";

import './App.css';

export default class SixthMilestone extends Component {
    render() {
        return (
            <div>
                <div className="milestone-container size-35 white bold-text">Milestone 6</div>

                <div className="gray-container size-16 white">
                    <div className="section-title"><label className="size-30 bold-text">The volume of our target market (including the different sub-markets)</label></div>
                    <div className="section-content gray">
                        <p>Because our main customers are students we will start estimating our market size from there.</p>

                        <p>According to National Institute of Statistics, the academic year 2017-2018 had around 538,900.
                            Estimating that 40% of these students are studying in their hometown and they don’t have to travel to faculty, we have 323,340 students.
                            Also, we conducted an interview and 50.9% the students are saying that they travel often or very often by train.
                            This means that we have 161,670 target customers that can purchase tickets via JustBookIt. To calculate the potential market size we will use the following formula:
                        </p>

                        <p>Market volume = Number of target customers × Penetration rate</p>

                        <p>To calculate the penetration rate we will devide the number of our customers which is 161,670 by the size of the market, which is 538,900 and we will obtain 0,3 which means 30% penetration rate.</p>
                        <p>In the end, the market volume is 48,501 regarding only students.</p>
                        <p>On the other hand, our platform can be used by other citizens as well. According to a news website more than 10% of travelers were students (538,900) which means that 4,850,100 were other citizens.
                            The population of Romania is around 20 millions of people and in this case we have 24% penetration rate and the market volume is 1,176,174.</p>

                        <p>So, total market volume of our business is 1,224,675.</p>


                    </div>
                </div>

                <div className="blue-container size-16 white">
                    <div className="section-title" style={{width: "100%"}}><label className="size-30 bold-text">The approximate number of players / competitors in our targeted market and the presentation of the competition</label></div>

                    <div className="section-content white">

                        <p>We identified 3 major platforms for buying online train tickets: CFR Calatori, Astra Trans Carpatic and Softrans.</p>
                        <p>The most important competitor is CFR Calatori because it’s a state-owned company and has the most customers.
                            CFR has transported 54,3 millions of passengers in 2017 and it’s the most favorite solution by people because it has routes all over the country.</p>

                        <p>Astra Trans Carpatic it’s a private railway company established in 2014.
                            It has only a couple of routes and the same as CFR Calatori there is no option for buying tickets with a student discount.
                            Softrans it’s maybe the most known private company because it has some popular routes.
                            Although private companies have better features and small prices than CFR, they don’t cover as much routes as CFR, so the number of customers is significantly smaller.</p>

                    </div>
                </div>

                <div className="gray-container size-16 white">
                    <div className="section-title"><label className="size-30 bold-text">Estimation for our potential market share in year 1, 2, 3, 4 and 5 after launch</label></div>
                    <div className="section-content gray">

                        <p><b>Year 1:</b> we expect that half of the students that are frequently travelling by train to be our customers, so our market share will be around 25%</p>
                        <p><b>Year 2:</b> we expect our market share to grow slightly from 25% (value from the previous year) to 37%</p>
                        <p><b>Year 3:</b> we expect that our fragile monopole of the market will be shattered, due to the apparition of another competitor.
                            We believe that this competitor will be financed by CFR, therefore our market share will decrease significantly from 37% to 15%</p>
                        <p><b>Year 4:</b> in order to overcome the setback experienced in the previous year we will come up with attractive new features that will allow us to gain back a small portion of the market share (from 15% to 28%)</p>
                        <p><b>Year 5:</b> we will successfully close a deal with our competitors and so our market share will boost from 28% to 60%</p>

                    </div>
                </div>

                <div className="blue-container size-16 white">
                    <div className="section-title"><label className="size-30 bold-text">The total market value and the value of our market share for years 1, 2, 3, 4, 5</label></div>

                    <div className="section-content white">

                        <p>Due to the fact that we are proposing an alternative for booking train tickets, we expect that the number of train travellers will increase at a yearly basis, as well as the total market value</p>

                        <p><b>Year 1:</b> Total market value: 128 million EUR. As we expect the percentage of our market share to be around 25%, its value will therefore be around 32 million EUR</p>
                        <p><b>Year 2:</b> Total market value: 140 million EUR. As we expect the percentage of our market share to be around 37%, its value will therefore be around 50 million EUR</p>
                        <p><b>Year 3:</b> Total market value: 150 million EUR. As we expect the percentage of our market share to be around 15%, its value will therefore be around 22 million EUR</p>
                        <p><b>Year 4:</b> Total market value: 155 million EUR. As we expect the percentage of our market share to be around 28%, its value will therefore be around 43 million EUR.</p>
                        <p><b>Year 5:</b> Total market value: 160 million EUR. As we expect the percentage of our market share to be around 60%, its value will therefore be around 96 million EUR</p>

                    </div>

                </div>


            </div>
        );
    }
}