import React, { Component } from 'react';

const URL_TEAMS = `http://localhost:3004/teams`

class Poll extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            pollTeams : ''
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

    renderPoll = () => {

    }
 
    render() {
        return (
            <div className="home-poll">
                <h3>Who will be the next champion ?</h3>
                <div className="poll-container">
                    {this.renderPoll}    
                </div> 
            </div>
        );
    }
}

export default Poll;