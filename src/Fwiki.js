import React, { Component } from 'react';

import FikiHeader from "./FikiHeader";
import FirstMilestone from "./FirstMilestone";
import SecondMilestone from "./SecondMilestone";


import './App.css';
import ThirdMilestone from "./ThirdMilestone";
import {Redirect} from "react-router-dom";

class Fwiki extends Component {

    constructor () {
        super();

        this.state = {
            enlargeImage: false,
            selectedImage: null
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
                        <img src={this.state.selectedImage} className="enlargedImage" alt=""/>
                    </div>
                }

                <FikiHeader redirectToLandingPage={() => this.setState({redirect: true})}/>
                <FirstMilestone/>
                <SecondMilestone/>
                <ThirdMilestone enlargeImage={(image) => this.setState({enlargeImage: true, selectedImage: image})}/>
            </div>
        );
    }
}

export default Fwiki;
