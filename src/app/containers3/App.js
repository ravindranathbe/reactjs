import React from "react";
import {connect} from "react-redux";

import { User } from "../components3/User";
import { Main } from "../components3/Main";
// import { addNumber, subtractNumber } from "../actions3/mathActions";
import { setName, setAge } from "../actions3/userActions";

class App extends React.Component {
	render() {
		return(
			<div className="row col-md-4 col-xs-12">
				<Main changeUsernameFn={() => this.props.setName('Ram')}/>
				<User username={this.props.user.name}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.userReducer,
		math: state.mathReducer
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		setName: (name) => {
			dispatch(setName(name));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);