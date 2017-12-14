import {
    FETCH_HOMEPAGE,
    SLIDER_INFO,
    BLOCKS_INFO
} from './types'

export const fetchHomepage = () => {
    const request = fetch(`http://localhost:3004/home`, { method: 'GET' })
        .then(response => response.json())
    
    return {
        type: FETCH_HOMEPAGE,
        payload: request
    }
}

export const slides = () => {
    const request = fetch(`http://localhost:3004/home`, { method: 'GET' })
        .then(response => response.json())
        .then(data => data.slider)
    
    return {
        type: SLIDER_INFO,
        payload: request
    }
}

export const blocks = () => {
    const request = fetch(`http://localhost:3004/home`, { method: 'GET' })
        .then(response => response.json())
        .then(data => data.blocks)
    
    return {
        type: BLOCKS_INFO,
        payload: request
    }
}
