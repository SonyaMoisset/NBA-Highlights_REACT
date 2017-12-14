import {
    GET_TEAM_PROFILE
} from './types'

export const getTeamProfile = id => {
    const request = fetch(`http://localhost:3004/teams?name=${id}`, { method: 'GET' })
        .then(response => response.json())

    return {
        type: GET_TEAM_PROFILE,
        payload: request
    }
}
