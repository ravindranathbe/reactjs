export function setName(name) {
	/*return {
		type: "SET_NAME",
		payload: name
	};*/
	/*return dispatch => {
		setTimeout(() => {
			dispatch({
				type: "SET_NAME",
				payload: name
			})
		}, 3000);
	};*/
	return {
		type: "SET_NAME",
		payload: new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(name);
			}, 3000);
		})
	};
}

export function setAge(age) {
	return {
		type: "SET_AGE",
		payload: age
	}
}