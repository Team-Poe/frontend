import React from 'react'

const DungeonMapContainer = (props) => {
  const {rooms} = props
  return (
    <div className="map"> 
      <div className="map-grid">
        <div className="row-1">{rooms.map(room => <div className="room">{room.title}</div>)}{rooms.map(room => <div className="room">{room.title}</div>)}</div>
        <div className="row-2">{rooms.map(room => <div className="room">{room.title}</div>)}{rooms.map(room => <div className="room">{room.title}</div>)} </div>
        <div className="row-3">{rooms.map(room => <div className="room">{room.title}</div>)}{rooms.map(room => <div className="room">{room.title}</div>)} </div>
        <div className="row-4"> {rooms.map(room => <div className="room">{room.title}</div>)}{rooms.map(room => <div className="room">{room.title}</div>)}</div>
        <div className="row-5"> {rooms.map(room => <div className="room">{room.title}</div>)}{rooms.map(room => <div className="room">{room.title}</div>)}</div>
        <div className="row-6"> {rooms.map(room => <div className="room">{room.title}</div>)}{rooms.map(room => <div className="room">{room.title}</div>)}</div>
        <div className="row-7"> {rooms.map(room => <div className="room">{room.title}</div>)}{rooms.map(room => <div className="room">{room.title}</div>)}</div>
        <div className="row-8"> {rooms.map(room => <div className="room">{room.title}</div>)}{rooms.map(room => <div className="room">{room.title}</div>)}</div>
        <div className="row-9"> {rooms.map(room => <div className="room">{room.title}</div>)}{rooms.map(room => <div className="room">{room.title}</div>)}</div>
        <div className="row-10"> {rooms.map(room => <div className="room">{room.title}</div>)}{rooms.map(room => <div className="room">{room.title}</div>)}</div>
      </div>
    </div>
  )
}

export default DungeonMapContainer