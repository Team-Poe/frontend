import React from 'react'
import InventoryButton from '../InventoryButton/InventoryButton.component'
import PlayerMetaData from '../PlayerMetaData/PlayerMetaData.component'
import MovementContainer from '../MovementContainer/MovementContainer.component'

const TaskBarContainer = (props) =>  {
  return (
    <div className="taskbar">
      <InventoryButton />
      <MovementContainer move={props.movement}/>
      <PlayerMetaData player={props.currentPlayer}/>
    </div>
  )
}

export default TaskBarContainer