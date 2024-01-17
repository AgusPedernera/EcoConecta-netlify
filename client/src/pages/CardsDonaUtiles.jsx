import React from 'react'
import NavBar from '../components/NavBar'
import CardInfo from '../components/CardInfo'
import './CardStyles.css'
import HamburgerLugares from '../components/HamburgerDonaLugares'

const CardsDonaUtiles = () => {
    return (
        <>
            <NavBar />
            <h2 className='tituloInfo'>Útiles escolares</h2>
            <HamburgerLugares />
            <div className='conteiner-carta'>

                <CardInfo url={'https://ecoconecta.onrender.com/api/cards/dona/utiles'} />

            </div>
        </>
    )
}

export default CardsDonaUtiles
