import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from './constants'
import getPeople from './api'

export function getData() {
	return {
		type: FETCHING_DATA
	}
}

export function getDataSuccess(data) {
	return {
		type: FETCHING_DATA_SUCCESS,
		data,
	}
}

export function getDataFailure() {
	return {
		type: FETCHING_DATA_FAILURE
	}
}

/*
 * The fetchData function is now a thunk.
 * When fetchData is called, it returns a function that will then dispatch the getData action.
 * Then, getPeople is called.
 * Once getPeople resolves, it will then dispatch the getDataSuccess action.
 */
export function fetchData() {
	// return inner function. The inner function receives the store methods dispatch and getState as parameters.
	return (dispatch) => {
		dispatch(getData())

		getPeople()
			.then((data) => {
				dispatch(getDataSuccess(data))
			})
			.catch((err) => console.log('err:', err))

	}
}
