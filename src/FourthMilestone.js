import React, { Component } from "react";
import persona from "./images/persona.png";
import userFlow from "./images/userFlow.png";

import register from './usecases/InregistrareJustBookIt.png';
import login from './usecases/LoginJustBookIt.png';
import bookTicket from './usecases/RezervareJustBookIt.png';
import useCases from './usecases/UseCaseJustBookIt.png';

import './App.css';

export default class FourthMilestone extends Component {
    render() {
        return (
            <div>
                <div className="milestone-container size-35 white bold-text">Milestone 4</div>

                <div className="gray-container size-16 white">
                    <div className="section-title"><label className="size-30 bold-text">Interviews</label></div>
                    <div className="section-content gray">
                        <p>The main customers segment that we are targeting are students. So, we interviewed three students, potential users
                        of our application, to identify their needs and problems.</p>
                                               
                        <p>Below you can see the questions that were included in the interview process as well as the answers provided by the
                        interviewees.</p>

                        <label className="subsection-title bold-text size-25">Questions</label>

                        <ul>
                            <li>What is your hometown? What is your current occupation?
                                <ul className="responses-container">
                                    <li><label className="student-1"><b>Student 1</b>:</label>I come from Craiova and study in Bucharest. I am a working student.</li>
                                    <li><label className="student-2"><b>Student 2</b>:</label>I come from Craiova. I am a student and I also work part time at a company in Bucharest.</li>
                                    <li><label className="student-3"><b>Student 3</b>:</label>I come from Focsani and I am a student.</li>
                                </ul>
                            </li>

                            <li>How often are you travelling by train? And where?
                                <ul className="responses-container">
                                    <li><label className="student-1"><b>Student 1</b>:</label>Once a month. I go home, in Craiova.</li>
                                    <li><label className="student-2"><b>Student 2</b>:</label>Before I was employed, I traveled home weekly, now once in a two weeks time.</li>
                                    <li><label className="student-3"><b>Student 3</b>:</label>Once or twice a month. I choose this method when travelling home, on holidays or long distances.</li>
                                </ul>
                            </li>

                            <li>What other alternatives do you have? What is your preferred mean of transportation?
                                <ul className="responses-container">
                                    <li><label className="student-1"><b>Student 1</b>:</label>I don’t consider any alternatives. As a student, train is the best option.</li>
                                    <li><label className="student-2"><b>Student 2</b>:</label>None. I don’t like travelling with other peoples’ cars and I don’t have my personal car yet.</li>
                                    <li><label className="student-3"><b>Student 3</b>:</label>Mainly I travel by train, but occasionally I also travel by bus.</li>
                                </ul>
                            </li>

                            <li>Which railway companies do you prefer?
                                <ul className="responses-container">
                                    <li><label className="student-1"><b>Student 1</b>:</label>Softrans, other particular companies, CFR (in this particular order).</li>
                                    <li><label className="student-2"><b>Student 2</b>:</label>CFR. However, I wasn’t aware that other companies are available.</li>
                                    <li><label className="student-3"><b>Student 3</b>:</label>CFR.</li>
                                </ul>
                            </li>

                            <li>How do you buy/book tickets?
                                <ul className="responses-container">
                                    <li><label className="student-1"><b>Student 1</b>:</label>When travelling with Softrans, directly from the train. When travelling with CFR, from the train station.</li>
                                    <li><label className="student-2"><b>Student 2</b>:</label>From the train station.</li>
                                    <li><label className="student-3"><b>Student 3</b>:</label>From the train station.</li>
                                </ul>
                            </li>
                            
                            <li>What do you find pleasant when buying/booking tickets?
                                <ul className="responses-container">
                                    <li><label className="student-1"><b>Student 1</b>:</label>When travelling with Softrans, I don’t have to wait at queues. When I travel with CFR, I don’t love anything in particular, but I also don’t have a problem with their system.</li>
                                    <li><label className="student-2"><b>Student 2</b>:</label>I like to verify when my personal information is filled.</li>
                                    <li><label className="student-3"><b>Student 3</b>:</label>Nothing.</li>
                                </ul>
                            </li>

                            <li>What do you dislike the most when buying/booking tickets?
                                <ul className="responses-container">
                                    <li><label className="student-1"><b>Student 1</b>:</label>Very long queues when buying tickets and the lack of a system that provide real time information about the seats availability of a particular train.</li>
                                    <li><label className="student-2"><b>Student 2</b>:</label>I am not a fan of queues and I also don’t like people who buy train tickets anticipatedly. Furthermore, a lot of people stand in line just to ask questions, instead of addressing to the Information Center.</li>
                                    <li><label className="student-3"><b>Student 3</b>:</label>The queues and the unfriendly personnel.</li>
                                </ul>
                            </li>

                            <li>What solutions do you suggest for the problems mentioned at the previous question?
                                <ul className="responses-container">
                                    <li><label className="student-1"><b>Student 1</b>:</label>A platform that allow students to book free train tickets and also a modality to see how many seats are available in the desired train.</li>
                                    <li><label className="student-2"><b>Student 2</b>:</label>A modality to book free train tickets online, with the possibility of receiving the ticket on email, ticket who can be scanned by the train personnel.</li>
                                    <li><label className="student-3"><b>Student 3</b>:</label>More booths opened at the train station and an official method to get train tickets directly from the train personnel.</li>
                                </ul>
                            </li>

                            <li>Would you pay an extra fee in order to buy/book tickets easily?
                                <ul className="responses-container">
                                    <li><label className="student-1"><b>Student 1</b>:</label>Only if I am in a hurry.</li>
                                    <li><label className="student-2"><b>Student 2</b>:</label>Only when travelling on highly used routes.</li>
                                    <li><label className="student-3"><b>Student 3</b>:</label>Depends of the sum.</li>
                                </ul>
                            </li>

                        </ul>

                        <div className="title-container white"><label className="bold-text size-25">Persona</label></div>

                        <div className="persona-container">
                            <img className="persona-picture" src={persona} alt=""/>
                            <div className="persona-details-container">
                                <div className="persona-first-container">
                                    <p><b>Name</b>: Amalia</p>
                                    <p><b>Age</b>: 23</p>
                                    <p><b>Gender</b>: Female</p>
                                    <p><b>Location</b>: Focsani</p>
                                    <p><b>Occupation</b>: student, programmer</p>
                                </div>

                                <div className="persona-second-container">
                                    <p><b>Behaviour</b>: Amalia is a very straightforward person. She is the kind of person who is always
                                    open on solving disputes using face-to-face communication.</p>

                                    <p><b>Needs</b>: Going home to visit her relatives and travelling to the seaside or to the mountains
                                    for relaxing purposes are among her most important needs. Furthermore, time is a valuable asset for
                                    her and she also feels the need to receive understanding from the people around her.</p>

                                    <p><b>Problems</b>: The high amount of time spent on buying train tickets is a very important issue to Amalia.
                                    The occasionally unfriendly personnel from the train station booths only adds to the discomfort experienced
                                    by Amalia.</p>
                                </div>
                            </div>
                        </div>
  
                    </div>
                </div>

                <div className="blue-container size-16 white">
                    <div className="section-title"><label className="size-30 bold-text">User stories | Use cases | User flows</label></div>
                    
                    <div className="section-content white">
                        <div style={{marginTop: "20px"}}><label className="subsection-title"><b>USER STORIES</b></label></div>
                        <ul>
                            <li>As a user I want to be able to book free train tickets so that I don’t have to waste time waiting on queues.</li>
                            <li>As a user I want to be able to finalize the booking process safe and fast.</li>
                            <li>As a user I want to be able to choose the preferred train from a list.</li>
                            <li>As a user I want to be able to save my personal information so that I can make the future bookings faster.</li>
                            <li>As a user I want to be able to book the return journey so that I don’t have to make another booking request for it.</li>
                        </ul>

                        <div style={{marginTop: "20px"}}><label className="subsection-title"><b>USE CASES & USER FLOWS</b></label></div>

                        <div style={{textAlign: "center"}}><img style={{height: "381px"}} src={userFlow} alt=""/></div>

                        <div className="wireframes-container" style={{marginBottom: "0px"}}>
                            {
                                [
                                    [register, "Register"],
                                    [login, "Login"],
                                    [bookTicket, "Book ticket"],
                                    [useCases, "USE CASES"]
                                ].map((image) => {
                                    return (
                                        <div className="wireframe-image-cointainer" key={image[0]}>
                                            <div className="transparent-layer">
                                                <img className="wireframe-image" src={image[0]} onClick={() => this.props.enlargeImage(image[0])} alt="" style={{backgroundColor: "white"}}/>
                                            </div>
                                            <p className="imageLabel"><b>{image[1]}</b></p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <p><b>NOTE: To open an image click on it!</b></p>

                    </div>
                </div>

            </div>
        );
    }
}