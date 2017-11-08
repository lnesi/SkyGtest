import React, { Component } from 'react';
import {BrowserRouter,Route, Switch } from 'react-router-dom';

import FootballLive from './football_live';
import FootballDetail from './football_detail';
import Header from './header';
import Landing from './landing';
class App extends Component {
  

  render() {
    return (
      <BrowserRouter>
    	<div>
    		<Header/>
    		<div className="container">
	    		<Switch>
	    			<Route exact path="/football/live"  component={FootballLive} />
	    			<Route path="/football/:eventId"  component={FootballDetail} />
	    			<Route exact path="/"  component={Landing} />
	    		</Switch>
    		</div>
    	</div>
    </BrowserRouter>
    );
  }
}
export default App;