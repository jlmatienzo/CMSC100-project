import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login 		from './components/Login';
import Signup 		from './components/Signup';
import Post 		from './components/Post';
import Profile 		from './components/Profile';
import Friends 		from './components/Friends';
import Dashboard	from './components/Dashboard';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact={true} path="/" component={ Login } />
					<Route exact={true} path="/signup" component={ Signup } />
					<Route exact={true} path="/home" component={ Dashboard }/>
					<Route exact={true} path="/profile/:id" component={ Profile } />
					<Route exact={true} path="/friends/:id" component={ Friends }/>
					<Route exact={true} path="/post/:id" component={ Post }/>
				</div>
			</Router>
		);
	}
}

export default App;
