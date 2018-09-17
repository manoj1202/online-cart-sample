import React from "react"
import {NavLink} from "react-router-dom"

const Navigation =(props) =>{
    return(
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/cart">Cart</NavLink></li>
        </ul>
    )
}

export default Navigation