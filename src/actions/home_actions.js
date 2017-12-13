import {
    GET_HOME,
    REQUEST_SLIDER,
    REQUEST_BLOCKS
} from './types'

export const getHome = () => {
    const request = fetch(`http://localhost:3004/home`, { method: 'GET' })
        .then(response => response.json())
    
    return {
        type: GET_HOME,
        payload: request
    }
}

export const requestSlider = () => {
    const request = fetch(`http://localhost:3004/home`, { method: 'GET' })
        .then(response => response.json())
        .then(data => data.slider)
    
    return {
        type: REQUEST_SLIDER,
        payload: request
    }
}

export const requestBlocks = () => {
    const request = fetch(`http://localhost:3004/home`, { method: 'GET' })
        .then(response => response.json())
        .then(data => data.blocks)
    
    return {
        type: REQUEST_BLOCKS,
        payload: request
    }
}
