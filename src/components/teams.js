import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'

const URL_TEAMS = `http://localhost:3004/teams`

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
            .then(response => reponse.json())
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
                <Link to={}>
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
                    {this.renderList(this.state)}    
                </div>
            </div>
        );
    }
}

export default Teams;