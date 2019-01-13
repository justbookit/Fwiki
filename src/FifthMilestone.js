import React, { Component } from "react";
import Facebook from "./images/facebook.png";
import Linkedin from "./images/linkedin.png";
import FacebookPost1 from "./images/facebook1.jpg";
import FacebookPost2 from "./images/facebook2.jpg";
import LinkedInPost from "./images/linkedin.JPG";
import VisitorsChart from "./images/visitors.png";
import HitMap from "./images/hitmap.png";

export default class FifthMilestone extends Component {
    render() {
        return (
            <div>
                <div className="milestone-container size-35 white bold-text">Milestone 5</div>

                <div className="blue-container size-16 white">
                    <div className="section-content">
                        <div className="title-container"><label className="size-30 bold-text">Where we shared our product's landing page</label></div>

                        <p style={{textAlign: "center"}}>To bring people on our product's landing page, we share it in some relevant groups on Facebook and LinkedIn.</p>

                        <div className="social-networks-container">
                            <div className="social-network-container">
                                <img src={Facebook} style={{width: "65px", height: "65px"}} alt=""/>
                            </div>

                            <div className="social-network-container">
                                <img src={Linkedin} style={{height: "65px"}} alt=""/>
                            </div>
                        </div>

                        <div className="social-network-description">
                            <p>On <b>Facebook</b>, we looked for groups relevant to our field and we found two groups that matched our needs.</p>

                            <ul>
                                <li>The first one is one of the biggest startup related groups on Facebook, having a number of 125,407 members.
                                    <ul style={{marginBottom: "20px"}}>
                                        <li><b>https://www.facebook.com/groups/2Dilekjaan/permalink/2223181107963654/</b></li>
                                    </ul>
                                </li>
                                <li>The second one is Start-Up Nation 2018 and it is created by a group of romanians from Cluj Napoca and it has 1,660 members.
                                    <ul>
                                        <li><b>https://www.facebook.com/groups/140198843336804/permalink/257670588256295/</b></li>
                                    </ul>
                                </li>
                            </ul>

                            <div className="screenshots-container">
                                <img style={{height: "319px"}} src={FacebookPost1} alt=""/>
                                <img style={{height: "319px"}} src={FacebookPost2} alt=""/>
                            </div>

                            <p style={{textAlign: "center"}}>
                                On <b>LinkedIn</b>, one of our colleague posted on his feed and he reached 174 views.
                                (<b>https://www.linkedin.com/feed/update/urn:li:activity:6469637416591327232</b>)
                            </p>
                            

                            <div style={{textAlign: "center", marginBottom: "30px"}}>
                                <img style={{height: "410px"}} src={LinkedInPost} alt=""/>
                            </div>
                        </div>

                        <div className="title-container"><label className="size-30 bold-text">Visitors</label></div>
                        
                        <p style={{textAlign: "center"}}>To track the number of visitors on our landing page, we used Google Analytics and Hotjar.</p>

                        <div style={{textAlign: "center", marginTop: "30px", marginBottom: "30px"}}>
                            <img style={{height: "300px"}} src={VisitorsChart} alt=""/>
                        </div>

                        <p>According to Google Analytics we have 28 different users that visited our page and according to Hotjar 32.</p>

                        <p>We highlighted the most important sources of our traffic in the figure above and as you can see, most of our traffic
                        comes from direct sources. Because how LinkedIn works the traffic that came from this social media website is
                        included in direct traffic.</p>

                        <p><b>So, the social media channel that worked best for us is LinkedIn with 47,2% of our traffic. This result
                        was expected because on LinkedIn we have a lot of people interested in our field.
                        After that, on the second place is our course page with 22,2%. The reason is the same as above, but the audience
                        wasn’t as much as on LinkedIn. On the thirth place we have Facebook with an accumulated 19,5% (Facebook website
                        + Facebook messenger + mobile app). Even if the reach was the greatest in this case, the results weren’t as good
                        as we expected. Maybe this happened because people don’t pay as much attention of Facebook as they used to or maybe
                        we haven’t chose the audience very good.</b></p>

                        <div style={{textAlign: "center", marginTop: "30px", marginBottom: "30px"}}>
                            <img style={{height: "369px"}} src={HitMap} alt=""/>
                        </div>

                        <p style={{textAlign: "center"}}>A nice feature that Hotjar provide are heatmaps. Using this feature we can see where people spent most
                        of their time on our page and where they clicked. Analyzing this data, we observed that 87 clicks were
                        recorded and the most of the clicks (22,99%) were on “Get Started” button. This means that people are interested
                        in our application and they can’t wait to get started.</p>

                        <p style={{textAlign: "center"}}>So far we have accomplished to convince 17 people to subscribe to our newsletters.</p>
                    </div>

                </div>
            </div>
        );
    }
}