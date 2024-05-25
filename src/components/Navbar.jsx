import React from "react"
import logo from "../images/nav-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img className="logo-img" src={logo} />
            <h1>my travel journal.</h1>
        </nav>
    )
}