import React from 'react'
import InventoryContainer from '../InventoryContainer/InventoryContainer.component'
import PlayerMetaData from '../PlayerMetaData/PlayerMetaData.component'

const TaskBarContainer = () =>  {
  return (
    <div className="taskbar">
      <InventoryContainer />
      <div className="inventory-button">I</div>
      <PlayerMetaData />
    </div>
  )
}

export default TaskBarContainer