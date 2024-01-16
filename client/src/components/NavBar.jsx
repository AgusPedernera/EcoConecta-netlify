import React from 'react'
import "./NavBar.css"
import "../index.css"

const NavBar = () => {
    return (
        <header>
            <a href="/"><img src="../img/logoVerde.png" alt="logo" />EcoConectá</a>
            <nav>
                <a href="/">Inicio</a>
                <a href="/dona">Doná</a>
                <a href="/compra">Comprá</a>
                <a href="/nosotros">Suma tu aporte</a>
            </nav>
            <img src="img/hambu.png" alt="menu" />
        </header>
    )
}

export default NavBar
