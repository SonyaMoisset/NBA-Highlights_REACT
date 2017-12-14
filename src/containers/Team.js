import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTeamProfile } from '../actions/team_actions'
import { bindActionCreators } from 'redux'

import { Squad } from '../components'

class Team extends Component {
    
    componentDidMount() {
        this.props.getTeamProfile(this.props.match.params.id)
    }

    showTeamProfile = ({ teamProfile }) => {
        if (teamProfile) {
            return teamProfile.map(team => {
                return (
                    <div
                        key={team.id}
                        className="team-data-wrapper">
                        <div className="left">
                            <img
                                alt={team.name}
                                src={`/images/teams/${team.logo}`} />
                        </div>
                        <div className="right">
                            <h1>{team.name}</h1>
                            <p>{team.description}</p>
                            <hr />
                            <Squad squadInfo={team.squad}/>
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        const { teamProfile } = this.props
        
        return (
            <div className="team-data">
                {this.showTeamProfile(teamProfile)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        teamProfile: state.team
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getTeamProfile }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Team)
