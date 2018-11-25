import React, { Component } from 'react';

import FikiHeader from "./FikiHeader";
import FirstMilestone from "./FirstMilestone";
import SecondMilestone from "./SecondMilestone";
import ThirdMilestone from "./ThirdMilestone";
import FourthMilestone from "./FourthMilestone";
import FifthMilestone from "./FifthMilestone";

import './App.css';
import SixthMilestone from "./SixthMilestone";
import Team from "./Team";

class Fwiki extends Component {

    constructor () {
        super();

        this.state = {
            enlargeImage: false,
            selectedImage: null,
            selectedMilestone: 1
        }
    }

    render() {

        return (
            <div className="app-container">

                {
                    this.state.enlargeImage &&

                    <div className="enlargedImageContainer">
                        <button className="closeEnlargedImage bold-text size-30" onClick={() => this.setState({enlargeImage: false})}>
                            <i className="far fa-times-circle"></i>
                        </button>
                        <img src={this.state.selectedImage} className="enlargedImage" alt="" style={{backgroundColor: "white"}}/>
                    </div>
                }

                <FikiHeader redirectToLandingPage={() => this.setState({redirect: true})}/>
                <Team/>

                <div className="milestone-menu">

                    <p className="menu-label size-30 bold-text">Milestones:</p>

                    {
                        [1, 2, 3, 4, 5, 6].map(i => {
                            return <button className="milestone-menu-button size-20 bold-text" onClick={() => this.setState({selectedMilestone: i})} key={i}>{i}</button>
                        })
                    }
                </div>

                {
                    this.state.selectedMilestone === 1 && <FirstMilestone/>
                }

                {
                    this.state.selectedMilestone === 2 && <SecondMilestone/>
                }

                {
                    this.state.selectedMilestone === 3 && <ThirdMilestone enlargeImage={(image) => this.setState({enlargeImage: true, selectedImage: image})}/>

                }

                {
                    this.state.selectedMilestone === 4 && <FourthMilestone enlargeImage={(image) => this.setState({enlargeImage: true, selectedImage: image})}/>
                }

                {
                    this.state.selectedMilestone === 5 && <FifthMilestone/>
                }

                {
                    this.state.selectedMilestone === 6 && <SixthMilestone/>
                }

            </div>
        );
    }
}

export default Fwiki;
