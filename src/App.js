import React, { Component } from 'react';

import FirstMilestone from "./FirstMilestone";
import SecondMilestone from "./SecondMilestone";
import './App.css';

class App extends Component {
	render() {
    	return (
    		<div className="app-container">

        		<div className="app-header">
          			<div className="app-title"><label className="size-75 bold-text white">JustBookIt.</label></div>
        		</div>

        		<FirstMilestone/>
        		<SecondMilestone/>
      		</div>
    	);
  	}
}

export default App;
