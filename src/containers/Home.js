import React, { Component } from 'react'

import { Blocks, Featured, Poll, Subscription } from '../components'

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

    render = () => (
        <div>
            <Featured slides={this.state.home.slider} />
            <Subscription />
            <Blocks blocks={this.state.home.blocks} />
            <Poll />
        </div>
    )
}