import {
    GET_HOME
} from './types'

export const getHome = () => {
    const request = fetch(`http://localhost:3004/home`, { method: 'GET' })
                    .then(response => response.json())
    
    return {
        type: GET_HOME,
        payload: request
    }
}