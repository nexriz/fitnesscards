let init = {
	isAuth: false,
	user: null
}

export default (state=init, action) => {
	return action.type === "SET_CURRENT_USER"
		? { isAuth: !!action.payload, user: action.payload }
		: state
}
