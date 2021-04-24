

import React, {useState, useEffect} from 'react'
import "/home/mouna/Bureau/React/react-debut/src/components/style.css"
function Navbar() {
    return (
        <nav>
            <ul className="liste">
                <img class="logo" src="./index.png"></img>
                <li className="items" id="about">About us</li>
                <li className="items">Career</li>
                <li className="items">Departments</li>
            </ul>
        </nav>
    )
}

export default Navbar
