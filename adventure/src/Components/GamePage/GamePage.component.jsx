import React, {useState, useEffect} from 'react'
import axios from 'axios'
import DungeonMapContainer from '../DungeonMapContainer/DungeonMapContainer.component'
import TaskBarContainer from '../TaskBarContainer/TaskBarContainer.component'
import RoomMetaData from '../RoomMetaData/RoomMetaData.component'
import ChatContainer from '../ChatContainer/ChatContainer.component'

const GamePage = () => {
  const [token, getToken] = useState('')
  const [gameMap, setGameMap] = useState({})
  const [currentPlayer, setCurrentPlayer] = useState('')
  const [currentRoom, setCurrentRoom] = useState({})
  const [playersInRoom, fetchPlayersInRoom] = useState([])
  const [roomItems, setRoomItems] = useState([])
  const [nextDirection, setNextDirection] = useState({direction: '', id: null})

  useEffect(() => {
    let userToken = localStorage.getItem('token')
    getToken(userToken)
  }, [])

  useEffect(() => {
    axios
    .get('https://lambda-mud-test.herokuapp.com/api/adv/init/', {
      headers: {
        Authorization: `${token}`
      }
    })
    .then(res => {
      console.log(res)
      setCurrentPlayer(res.data.name)
      fetchPlayersInRoom(res.data.players)
      setCurrentRoom(res.data)
      setRoomItems(res.data.items)
    })
    .catch(err => {
      console.error(err)
    })
  }, [token])

  useEffect(() => {
    axios
    .post('https://lambda-mud-test.herokuapp.com/api/adv/move/', nextDirection, {
      headers: {
        Authorization: `${token}`
      }
    })
    .then(res => {
      console.log(res)
      setCurrentPlayer(res.data.name)
      setCurrentRoom(res.data)
      fetchPlayersInRoom(res.data.players)
      setRoomItems(res.data.items)
    })
  }, [nextDirection])

  const movementHandler = dir => {
    setNextDirection({direction: dir})
  }
 console.log(nextDirection)
  return (
    <div className="game-page">
      <DungeonMapContainer />
      <TaskBarContainer currentPlayer={currentPlayer} movement={movementHandler}/>
      <RoomMetaData players={playersInRoom} currentRoomInfo={currentRoom} items={roomItems}/>
      <ChatContainer />
    </div>
  )
}

export default GamePage