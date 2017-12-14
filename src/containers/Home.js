import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHomepage, slides, blocks } from '../actions/home_actions'
import { bindActionCreators } from 'redux'

import { Blocks, Featured, Poll, Subscription } from '../components'

class Home extends Component {

    componentDidMount() {
        this.props.fetchHomepage()
        this.props.slides()
        this.props.blocks()
    }
    
    render() {
        const { slides, blocks } = this.props.homepage
        
        return (
            <div>
                <Featured slides={slides} />
                <Subscription />
                <Blocks blocks={blocks} />
                <Poll />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        homepage: state.home
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchHomepage, slides, blocks }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
