import React, { Component } from 'react';

const URL_TEAMS = `http://localhost:3004/teams`

class Poll extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            pollTeams : []
        }
    }

    fetchPoll = () => {
        fetch(`${URL_TEAMS}?poll=true&_sort=count&_order=desc`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    pollTeams: json
                })
            })
    }

    componentDidMount() {
        this.fetchPoll()
    }

    addCount = (count, id) => {
        fetch(`${URL_TEAMS}/${id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                count: count + 1
            })
        })
            .then(() => {
            this.fetchPoll()
        })
    }

    renderPoll = () => {
        const position = ['1ST', '2ND', '3RD']

        return this.state.pollTeams.map((team, index) => {
            return (
                <div
                    key={team.id}
                    className="poll-item"
                    onClick={() => this.addCount(team.count, team.id)}>
                    <img alt={team.name} src={`/images/teams/${team.logo}`} />
                    <h4>{position[index]}</h4>
                    <div>{team.count} Votes</div>
                </div>
            )
        })
    }
 
    render() {
        return (
            <div className="home-poll">
                <h3>Who will be the next champion ?</h3>
                <div className="poll-container">
                    {this.renderPoll(this.state.pollTeams)}    
                </div> 
            </div>
        );
    }
}

export default Poll;