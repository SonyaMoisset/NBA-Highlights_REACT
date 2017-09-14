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

export default class Teams extends Component {
    constructor(props) {
        super(props)

        this.state = {
            teams: [],
            filtered: [],
            keyword: ''
        }
    }

    componentDidMount = () => {
        fetch(URL_TEAMS, { method: 'GET' })
        .then(teams => teams.json())
        .then(teams => { this.setState({ teams, filtered: teams }) })
    }

    renderList = ({filtered}) => {
        return filtered.map(team => {
            return (
                <Link
                    to={`/team/${team.name}`}
                    key={team.id}
                    className="team-item">
                    <img
                        alt={team.name}
                        src={`/images/teams/${team.logo}`}/>    
                </Link>
            )
        })
    }

    searchTeam = event => {
        const keyword = event.target.value

        if (keyword !== '') {
            const list = this.state.teams.filter(team => {
                return team.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1 
            })
            this.setState({ filtered: list, keyword })
        } else {
            this.setState({ filtered: this.state.teams, keyword })
        }
    }

    handleChange = event => {
        this.searchTeam(event)
    }

    render = () => {
        return (
            <div className="teams-component">
                <div className="teams-input">
                    <input
                        value={this.state.keyword}    
                        type="text"
                        placeholder="Search for a team"
                        onChange={this.handleChange}/>    
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
