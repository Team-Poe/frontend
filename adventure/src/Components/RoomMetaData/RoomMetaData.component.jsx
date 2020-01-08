import React from 'react'

const RoomMetaData = (props) => {
  let items = props.items
  return (
    <div className="room-detail">
      <h3>{props.currentRoomInfo.title}</h3>
      <p>{props.currentRoomInfo.description}</p>
      {items ? items.map(item => <p>{item}</p>)  : 'There are no items in this room'}
      <div className="player-list">
        {props.players.map(player => {
          return <p>{player}</p>
        })}
      </div>
    </div>
  )
}

export default RoomMetaData