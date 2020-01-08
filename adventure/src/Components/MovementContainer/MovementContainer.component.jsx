import React from 'react'

const directions = [
  'west',
  'north',
  'south',
  'east'
]

const MovementContainer = (props) => {

  
  return (
    <div className="movement-container">
      {directions.map(dir => <div onClick={() => props.move(dir[0])} className="direction">{dir}</div>)}
    </div>
  )
}

export default MovementContainer