import React, { Component } from 'react';
import AncaPicture from "./Anca.jpg";
import RaduPicture from "./Radu.jpg";
import CatalinPicture from "./Catalin.jpg";
import DanielPicture from "./Daniel.jpg";
import PaulPicture from "./Paul.jpg";
import stationPicture from "./station.jpg";
import studentPicture from "./student.png";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="app-header">
          <div className="title-container"><label className="size-75 bold-text white">JustBookIt</label></div>
        </div>

        <div className="app-body">

          <div className="team-container">
            <div><label className="size-30 bold-text gray">Meet the team</label></div>
            <div className="team-members">
              <div className="team-member">
                  <div><img className="profile-picture" src={AncaPicture}/></div>
                  <label className="team-member-name bold-text">Anca-Gabriela Stan</label>
                  <label className="team-member-first-role">UX/UI Designer</label>
                  <label className="team-member-second-role">Frontent Software Developer</label>
                  <label>ancagabriela.stan31@gmail.com</label>
              </div>
              <div className="team-member">
                  <div><img className="profile-picture" src={RaduPicture}/></div>
                  <label className="team-member-name bold-text">Radu Daniel Cojocaru</label>
                  <label className="team-member-first-role">Tehnical Lead</label>
                  <label className="team-member-second-role">Backend Software Developer</label>
                  <label>radudanielcojocaru@gmail.com</label>
              </div>
              <div className="team-member">
                  <div><img className="profile-picture" src={DanielPicture}/></div>
                  <label className="team-member-name bold-text">Daniel Chirana</label>
                  <label className="team-member-first-role">Product Owner</label>
                  <label className="team-member-second-role">Product Manager</label>
                  <label>daniel.chir95@gmail.com</label>
              </div>
              <div className="team-member">
                  <div><img className="profile-picture" src={CatalinPicture}/></div>
                  <label className="team-member-name bold-text">Stefan-Catalin Jitea</label>
                  <label className="team-member-first-role">Tehnical Analyst</label>
                  <label className="team-member-second-role">Backend Software Developer</label>
                  <label>catalinjitea@gmail.com</label>
              </div>
              <div className="team-member">
                  <div><img className="profile-picture" src={PaulPicture}/></div>
                  <label className="team-member-name bold-text">Paul Emiliam Sterpu</label>
                  <label className="team-member-first-role">Business Analyst</label>
                  <label  className="team-member-second-role">Frontent Software Developer</label>
                  <label>paulsterpu@gmail.com</label>
              </div>
            </div>
          </div>

          <div className="problem-container white">
            <div className="section-title"><label className="size-30 bold-text">Problem</label></div>
            <div className="section-body size-16">
              <p>Nowadays, a very frequent problem that many students from our country are dealing with at a weekly basis
                is the problem of acquiring free train tickets. It may seem that there is no issue at all, the only thing
                they have to do is to show at the train station their id card and the id received from their university
                which proves that they are enrolled in the current year at a university and they should be good to go.
              </p>

              <p>The real problem is the massive queues at the train stations. In average a student must wait aproximately
                30 minutes in order to receive a ticket, which is very unpleasant, especially when they find themselves in a hurry.
              </p>

              <p>At the train stations there are dedicated terminals where people can buy tickets, but students cannot
                take advantage of their free tickets rights when using these terminals because these terminals do not have
                a functionality for student tickets.
              </p>
            </div>
          </div>

          <div className="solution-container">
            <label className="size-30 bold-text gray">Solution</label>
            <div className="section-body size-16">
              <p>Our solution aims to offer a web platform where students can book free train tickets,
                eliminating the frustrating waiting at the train stations. Our raw functionalities
                include the following:
              </p>

              <div className="options-container">
                <div>
                  <i class="fas fa-users"></i>
                  <label className="solution-content">allowing users to register their personal data in order to be able to book tickets</label>
                </div>

                <div>
                  <i class="fas fa-subway"></i>
                  <label className="solution-content">choose the source and destionation of their travel</label>
                </div>

                <div>
                  <i class="fas fa-ticket-alt"></i>
                  <label className="solution-content">receive an email or sms with the ticket</label>
                </div>
              </div>

              <p className="solution-p">Of course, a validation mechanism that must decide if an user is for real a student or not
                will be implemented. For the moment we will entrust in the train personnel to verify if the
                data marked on the ticket is the same with the data on the traveller’s personal id card.
                In addition to this, we can associate in our database this pair: CNP - Student card id.
              </p>

            </div>
          </div>

          <div className="problem-container white">
            <div className="section-title"><label className="size-30 bold-text">Customer segments</label></div>
            <div className="customer-body">
              <img src={studentPicture}/>
              <div className="customer-content size-16">
                <p className="customer-p">
                  For the moment, the ones who will benefit from our services will be students, due to
                  the fact that they do not have access to an online platform that allows them to book
                  free train tickets. As a further development, we can think about extending to another
                  customer categories, including payment methods as well.</p>
              </div>
            </div>
          </div>

          <div className="solution-container">
            <label className="size-30 bold-text gray">Competition</label>
          </div>

          <div className="solution-container">
            <label className="size-30 bold-text gray">Our advantage over the competition</label>
          </div>

          <div className="problem-container white">
            <div className="section-title"><label className="size-30 bold-text">Key metrics</label></div>
          </div>

          <div className="solution-container">
            <label className="size-30 bold-text gray">Cost structure</label>
          </div>

          <div className="solution-container">
            <label className="size-30 bold-text gray">Revenue streams</label>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
