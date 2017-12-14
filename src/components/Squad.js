import React from 'react'

const showSquadInfo = ({ squadInfo }) => {
    if (squadInfo) {
        return squadInfo.map(squad => {
            return (
                <div
                    key={squad.name}
                    className="item player-wrapper">
                    <img
                        alt={squad.name}
                        src={`/images/avatar.png`} />
                    <h4>{squad.name}</h4>
                    <div className="node">
                        <span>Number:</span>{squad.number}
                    </div>
                    <div className="node">
                        <span>PPG:</span>{squad.PPG}
                    </div>
                    <div className="node">
                        <span>APG:</span>{squad.APG}
                    </div>
                    <div className="node">
                        <span>RPG:</span>{squad.RPG}
                    </div>
                </div>
            )
        })
    }
}

const SquadInfo = squadInfo => (
    <div className="squad">
        {showSquadInfo(squadInfo)}
    </div>
)

export default SquadInfo
