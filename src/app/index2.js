import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import { Root } from "./components2/Root";
import { User } from "./components2/User";
import { Home } from "./components2/Home";

class App extends React.Component {
	render() {
		return(
			/* <Root>
				<Home></Home>
			</Root> */
			<Router history={browserHistory}>
				<Route path={"/"} component={Root}>
					<IndexRoute component={Home}/>
					<Route path={"user/:id"} component={User}></Route>
					<Route path={"home"} component={Home}></Route>
				</Route>
				<Route path={"user"} component={User} />
				<Route path={"home"} component={Home} />
			</Router>
			);
	}
}

render(<App/>, document.getElementById('app'));