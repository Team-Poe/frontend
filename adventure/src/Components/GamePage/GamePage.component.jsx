import React from 'react'
import DungeonMapContainer from '../DungeonMapContainer/DungeonMapContainer.component'
import TaskBarContainer from '../TaskBarContainer/TaskBarContainer.component'
import RoomMetaData from '../RoomMetaData/RoomMetaData.component'
import ChatContainer from '../ChatContainer/ChatContainer.component'

const GamePage = () => {
  return (
    <div className="game-page">
      <DungeonMapContainer />
      <TaskBarContainer />
      <RoomMetaData />
      <ChatContainer />
    </div>
  )
}

export default GamePage