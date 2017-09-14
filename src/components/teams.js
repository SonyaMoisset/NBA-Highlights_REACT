import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'

const URL_TEAMS = `http://localhost:3004/teams`

const fadeAnimation = {
    transitionName: 'fade',
    transitionAppear: true,
    transitionAppearTimeout: 500,
    transitionEnter: true,
    transitionEnterTimeout: 500,
    transitionLeave: true,
    transitionLeaveTimeout: 500
}

class Teams extends Component {
    constructor(props) {
        super(props)

        this.state = {
            teams: [],
            filtered: [],
            keyworkds: ''
        }
    }

    componentDidMount() {
        fetch(URL_TEAMS, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    teams: json,
                    filtered: json
            })
        })
    }

    renderList = ({filtered}) => {
        return filtered.map((team) => {
            return (
                <Link
                    to={`/team/${team.name}`}
                    key={team.id}
                    className="team-item"
                >
                    <img
                        alt={team.name}
                        src={`/images/teams/${team.logo}`}
                    />    
                </Link>
            )
        })
    }

    render() {
        return (
            <div className="teams-component">
                <div className="teams-input">
                    <input
                        type="text"
                        placeholder="Search for a team"
                    />    
                </div>
                <div className="teams-container">
                    <CSSTransitionGroup {...fadeAnimation}>
                        {this.renderList(this.state)}
                    </CSSTransitionGroup>
                </div>
            </div>
        );
    }
}

export default Teams;