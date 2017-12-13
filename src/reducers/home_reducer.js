import {
    GET_HOME,
    REQUEST_SLIDER,
    REQUEST_BLOCKS
} from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case GET_HOME:
            return {
                ...state,
                home: action.payload
            }  
        case REQUEST_SLIDER:
            return {
                ...state,
                slider: action.payload
            }  
        case REQUEST_BLOCKS:
            return {
                ...state,
                blocks: action.payload
        }    
        default:
            return state    
    }
}
