import React, { Component } from 'react'

import Featured from '../components/featured'
import Subscriptions from '../components/subscription'
import Blocks from '../components/blocks'
import Poll from '../components/poll'

const URL_HOME = `http://localhost:3004/home`;

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            home: ''
        }
    }

    componentDidMount = () => {
        fetch(URL_HOME, { method: "GET" })
        .then(home => home.json())
        .then(home => { this.setState({ home }) })
    }

    render = () => {
        return (
            <div>
                <Featured slides={this.state.home.slider} /> 
                <Subscriptions />
                <Blocks blocks={this.state.home.blocks} />
                <Poll />
            </div>
        )
    }
}
