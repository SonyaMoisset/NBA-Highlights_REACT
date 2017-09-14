import React, { Component } from 'react';

const URL_TEAM = `http://localhost:3004/teams`

class Team extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }
    
    componentDidMount() {
        fetch(`${URL_TEAM}?name=${this.props.match.params.id}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    data: json
            })
        })
    }

    renderSquad = (squad) => {
        return squad.map((item) => {
            return (
                <div
                    key={item.name}
                    className="item player-wrapper"
                >
                    <img
                        alt={item.name}
                        src={`/images/avatar.png`}
                    />
                    <h4>{item.name}</h4>
                    <div className="node">
                        <span>Number:</span>{item.number}
                    </div>
                    <div className="node">
                        <span>PPG:</span>{item.PPG}
                    </div>
                    <div className="node">
                        <span>APG:</span>{item.APG}
                    </div>
                    <div className="node">
                        <span>RPG:</span>{item.RPG}
                    </div>
                </div>
            )
        })
    }

    renderData = ({data}) => {
        return data.map((item) => {
            return (
                <div
                    key={item.id}
                    className="team-data-wrapper"
                >
                    <div className="left">
                        <img
                            alt={item.name}
                            src={`/images/teams/${item.logo}`}
                        />
                    </div>
                    <div className="right">
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <hr />
                        <div className="squad">
                            {this.renderSquad(item.squad)}    
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="team-data">
                {this.renderData(this.state)}
            </div>
        );
    }
}

export default Team;