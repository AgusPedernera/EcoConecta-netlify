import React from 'react'
import NavBar from '../components/NavBar'
import CardInfo from '../components/CardInfo'
import './CardStyles.css'
import HamburgerLugares from '../components/HamburgerDonaLugares'

const CardsDonaRopa = () => {
    return (
        <>
        <NavBar/>
        <h2 className='tituloInfo'>Ropa</h2>
        <HamburgerLugares />
        <div className='conteiner-carta'> 
            
            <CardInfo url={'http://localhost:8080/api/cards/dona/ropa'}/>
        
        </div>
        </>
    )
}

export default CardsDonaRopa
