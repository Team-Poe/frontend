import React from 'react'
import InventoryButton from '../InventoryButton/InventoryButton.component'
import PlayerMetaData from '../PlayerMetaData/PlayerMetaData.component'
import MovementContainer from '../MovementContainer/MovementContainer.component'

const TaskBarContainer = () =>  {
  return (
    <div className="taskbar">
      <InventoryButton />
      <MovementContainer />
      <PlayerMetaData />
    </div>
  )
}

export default TaskBarContainer