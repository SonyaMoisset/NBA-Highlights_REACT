import {
    GET_TEAM_PROFILE
} from '../actions/types'

export default function (state = [], action) {
    switch (action.type) {
        case GET_TEAM_PROFILE:
            return {
                ...state,
                teamProfile: action.payload
            }
        default:
            return state    
    }
}
