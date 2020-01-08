import React, {useState, useEffect} from 'react'
import axios from 'axios'
import DungeonMapContainer from '../DungeonMapContainer/DungeonMapContainer.component'
import TaskBarContainer from '../TaskBarContainer/TaskBarContainer.component'
import RoomMetaData from '../RoomMetaData/RoomMetaData.component'
import ChatContainer from '../ChatContainer/ChatContainer.component'

const GamePage = () => {
  const [token, getToken] = useState('')
  const [gameMap, setGameMap] = useState({})
  const [currentRoom, getCurrentRoom] = useState({})
  const [playersInRoom, fetchPlayersInRoom] = useState([])
  const [roomItems, getRoomItems] = useState([])

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
      fetchPlayersInRoom(res.data.players)
      getCurrentRoom(res.data)
      getRoomItems(res.data.items)
    })
    .catch(err => {
      console.error(err)
    })
  }, [token])

  return (
    <div className="game-page">
      <DungeonMapContainer />
      <TaskBarContainer />
      <RoomMetaData players={playersInRoom} currentRoomInfo={currentRoom} items={roomItems}/>
      <ChatContainer />
    </div>
  )
}

export default GamePage