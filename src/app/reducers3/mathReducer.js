const initialState = {
	result: 1,
	lastValues: [],
	username: 'Max'
};

const mathReducer = (state = initialState, action) => {
	switch(action.type) {
		case "ADD":
			// state = state + action.payload;
			// state.result += action.payload;
			/*state = {
				result: state.result,
				lastValues: state.lastValues
			};*/
			state = {
				...state,
				result: state.result + action.payload,
				lastValues: [...state.lastValues, action.payload]
			}
			// state.lastValues.push(action.payload);
			break;
		case "SUBTRACT":
			// state = state - action.payload;
			// state.result -= action.payload;
			state = {
				...state,
				result: state.result - action.payload,
				lastValues: [...state.lastValues, action.payload]
			}
			// state.lastValues.push(action.payload);
			break;
	}
	return state;
};

export default mathReducer;