import React from 'react'

const PlayerMetaData = (props) => {
  return (
    <div className="playerData">
      <div className="health-bar">100/100</div>
      <div className="mana-bar">100/100</div>
      <div className="tab-button-1"> </div>
      <div className="tab-button-2"> </div>
      <div className="playerPic"> </div>
      <div className="player-name">{props.player}</div>
    </div>
  )
}

export default PlayerMetaData