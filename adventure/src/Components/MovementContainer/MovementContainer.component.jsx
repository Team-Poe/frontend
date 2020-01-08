import React from 'react'

const directions = [
  'west',
  'north',
  'south',
  'east'
]

const MovementContainer = () => {

  
  return (
    <div className="movement-container">
      {directions.map(dir => <p className="direction">{dir}</p>)}
    </div>
  )
}

export default MovementContainer