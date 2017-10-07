import {
    GET_HOME
} from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case GET_HOME:
            return {
                ...state,
                home: action.payload
            }    
        default:
            return state    
    }
}