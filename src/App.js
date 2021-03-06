import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Fwiki from "./Fwiki";

class App extends Component {


	render() {
    	return (
    		<div className="app-container">

                <Switch>
                    <Route exact path="/" component={Fwiki} />
                </Switch>
      		</div>
    	);
  	}
}

export default withRouter(App);
