import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getHome, requestSlider, requestBlocks } from '../actions/home_actions'
import { bindActionCreators } from 'redux'

import { Blocks, Featured, Poll, Subscription } from '../components'

class Home extends Component {

    componentDidMount() {
        this.props.getHome()
        this.props.requestSlider()
        this.props.requestBlocks()
    }
    
    render() {
        return (
            <div>
                <Featured slides={this.props.home.slider} />
                <Subscription />
                <Blocks blocks={this.props.home.blocks} />
                <Poll />
            </div>
        )
    }
    
}

function mapStateToProps(state) {
    return {
        home: state.home
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getHome, requestSlider, requestBlocks }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)