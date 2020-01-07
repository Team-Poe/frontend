import React, {useState, useEffect} from "react"
import axios from "axios"

const World = () => {

    useEffect(() => {
        axios.get("https://team-poe.herokuapp.com/api/adv/init", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err.response)
        })
    }, [])
    return (
        <h1>World</h1>
    )
}

export default World 