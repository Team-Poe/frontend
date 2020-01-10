import React from 'react'

const DungeonMapContainer = (props) => {
  const {rooms} = props
  return (
    <div className="map"> 
      <div className="map-grid">
        <div className="row-1">{rooms.filter(room => room.id <= 20 && room.id > 10).map(room => <div className="room">{room.title}</div>)}</div>
        <div className="row-2">{rooms.filter(room => room.id <= 30 && room.id > 20).map(room => <div className="room">{room.title}</div>)}</div>
        <div className="row-3">{rooms.filter(room => room.id <= 40 && room.id > 30).map(room => <div className="room">{room.title}</div>)}</div>
        <div className="row-4">{rooms.filter(room => room.id <= 50 && room.id > 40).map(room => <div className="room">{room.title}</div>)}</div>
        <div className="row-5">{rooms.filter(room => room.id <= 60 && room.id > 50).map(room => <div className="room">{room.title}</div>)}</div>
        <div className="row-6">{rooms.filter(room => room.id <= 70 && room.id > 60).map(room => <div className="room">{room.title}</div>)}</div>
        <div className="row-7">{rooms.filter(room => room.id <= 80 && room.id > 70).map(room => <div className="room">{room.title}</div>)}</div>
        <div className="row-8">{rooms.filter(room => room.id <= 90 && room.id > 80).map(room => <div className="room">{room.title}</div>)}</div>
        <div className="row-9">{rooms.filter(room => room.id <= 100 && room.id > 90).map(room => <div className="room">{room.title}</div>)}</div>
        <div className="row-10">{rooms.filter(room => room.id <= 110 && room.id > 100).map(room => <div className="room">{room.title}</div>)}</div>
      </div>
    </div>
  )
}

export default DungeonMapContainer