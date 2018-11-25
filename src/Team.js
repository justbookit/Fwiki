import React, { Component } from 'react'

import AncaPicture from "./team/Anca.jpg";
import RaduPicture from "./team/Radu.jpg";
import CatalinPicture from "./team/Catalin.jpg";
import DanielPicture from "./team/Daniel.jpg";
import PaulPicture from "./team/Paul.jpg";

export default class Team extends Component {

    render() {
        return (
            <div className="team-container gray">
                <div><label className="size-30 bold-text">Meet the team</label></div>
                <div className="team-members">
                    <div className="team-member">
                        <div><img className="profile-picture" src={AncaPicture} alt=""/></div>
                        <label className="team-member-name bold-text">Anca-Gabriela Stan</label>
                        <label className="team-member-first-role">UX/UI Designer</label>
                        <label className="team-member-second-role">Frontend Software Developer</label>
                        <label>ancagabriela.stan31@gmail.com</label>
                    </div>

                    <div className="team-member">
                        <div><img className="profile-picture" src={RaduPicture} alt=""/></div>
                        <label className="team-member-name bold-text">Radu Daniel Cojocaru</label>
                        <label className="team-member-first-role">Technical Lead</label>
                        <label className="team-member-second-role">Backend Software Developer</label>
                        <label>radudanielcojocaru@gmail.com</label>
                    </div>

                    <div className="team-member">
                        <div><img className="profile-picture" src={DanielPicture} alt=""/></div>
                        <label className="team-member-name bold-text">Daniel Chirana</label>
                        <label className="team-member-first-role">Product Owner</label>
                        <label className="team-member-second-role">Product Manager</label>
                        <label>daniel.chir95@gmail.com</label>
                    </div>

                    <div className="team-member">
                        <div><img className="profile-picture" src={CatalinPicture} alt=""/></div>
                        <label className="team-member-name bold-text">Stefan-Catalin Jitea</label>
                        <label className="team-member-first-role">Technical Analyst</label>
                        <label className="team-member-second-role">Backend Software Developer</label>
                        <label>catalinjitea@gmail.com</label>
                    </div>

                    <div className="team-member">
                        <div><img className="profile-picture" src={PaulPicture} alt=""/></div>
                        <label className="team-member-name bold-text">Paul Emilian Sterpu</label>
                        <label className="team-member-first-role">Business Analyst</label>
                        <label className="team-member-second-role">Frontend Software Developer</label>
                        <label>paulsterpu@gmail.com</label>
                    </div>
                </div>
            </div>
        )
    }
}