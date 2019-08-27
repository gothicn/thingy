import { actionTypes } from './actions'

export const exampleInitialState = {
    errors: {
        name: [],
        insta: [],
        pass: []
    },
    loading: false,
    data: {}
}

function reducer(state = exampleInitialState, action) {
    switch (action.type) {
        case actionTypes.FAILURE:
            return {
                ...state,
                ...{ loading: false, errors: action.errors }
            }
        case actionTypes.LOAD_DATA: {
            return {
                ...state,
                ...{ loading: true, data: action.data }
            }
        }

        default:
            return state
    }
}

export default reducer
