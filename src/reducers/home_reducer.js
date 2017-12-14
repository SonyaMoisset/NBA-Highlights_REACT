import {
    FETCH_HOMEPAGE,
    SLIDER_INFO,
    BLOCKS_INFO
} from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_HOMEPAGE:
            return {
                ...state,
                homepage: action.payload
            }  
        case SLIDER_INFO:
            return {
                ...state,
                slides: action.payload
            }  
        case BLOCKS_INFO:
            return {
                ...state,
                blocks: action.payload
        }    
        default:
            return state    
    }
}
