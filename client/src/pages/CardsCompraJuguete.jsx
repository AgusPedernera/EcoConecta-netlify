import React from 'react'
import NavBar from '../components/NavBar'
import CardInfo from '../components/CardInfo'
import './CardStyles.css'
import HamburgerLugares from '../components/HamburgerCompraLugares'

const CardsCompraJuguete = () => {
    return (
        <>
            <NavBar />
            <h2 className='tituloInfo'>Juguetes</h2>
            <HamburgerLugares />
            <div className='conteiner-carta'>

                <CardInfo url={'https://ecoconecta.onrender.com/api/cards/compra/juguetes'} />
             
            </div>
        </>
    )
}

export default CardsCompraJuguete

