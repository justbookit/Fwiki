import React, { Component } from 'react';

import FikiHeader from "./FikiHeader";
import FirstMilestone from "./FirstMilestone";
import SecondMilestone from "./SecondMilestone";
import './App.css';

class App extends Component {
	render() {
    	return (
    		<div className="app-container">
				<FikiHeader/>
        		<FirstMilestone/>
        		<SecondMilestone/>
      		</div>
    	);
  	}
}

export default App;
