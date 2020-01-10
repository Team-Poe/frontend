import React from "react";

const DungeonMapContainer = props => {
  const { rooms } = props;
  console.log(rooms);
  return (
    <div className="map">
      <div className="map-grid">

        <div className="row-1">
          {rooms
            .filter(room => room.id <= 242 && room.id > 232)
            .map(room => (
              <div className="room">{room.title}</div>
            ))}
        </div>
        <div className="row-2">
          {rooms
            .filter(room => room.id <= 252 && room.id > 242)
            .map(room => (
              <div className="room">{room.title}</div>
            ))}
        </div>
        <div className="row-3">
          {rooms
            .filter(room => room.id <= 262 && room.id > 252)
            .map(room => (
              <div className="room">{room.title}</div>
            ))}
        </div>
        <div className="row-4">
          {rooms
            .filter(room => room.id <= 272 && room.id > 262)
            .map(room => (
              <div className="room">{room.title}</div>
            ))}
        </div>
        <div className="row-5">
          {rooms
            .filter(room => room.id <= 282 && room.id > 272)
            .map(room => (
              <div className="room">{room.title}</div>
            ))}
        </div>
        <div className="row-6">
          {rooms
            .filter(room => room.id <= 292 && room.id > 282)
            .map(room => (
              <div className="room">{room.title}</div>
            ))}
        </div>
        <div className="row-7">
          {rooms
            .filter(room => room.id <= 302 && room.id > 292)
            .map(room => (
              <div className="room">{room.title}</div>
            ))}
        </div>
        <div className="row-8">
          {rooms
            .filter(room => room.id <= 312 && room.id > 302)
            .map(room => (
              <div className="room">{room.title}</div>
            ))}
        </div>
        <div className="row-9">
          {rooms
            .filter(room => room.id <= 322 && room.id > 312)
            .map(room => (
              <div className="room">{room.title}</div>
            ))}
        </div>
        <div className="row-10">
          {rooms
            .filter(room => room.id <= 332 && room.id > 321)
            .map(room => (
              <div className="room">{room.title}</div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DungeonMapContainer;
