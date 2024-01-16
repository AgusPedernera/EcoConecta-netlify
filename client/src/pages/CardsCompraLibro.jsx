import React from 'react'
import NavBar from '../components/NavBar'
import CardInfo from '../components/CardInfo'
import './CardStyles.css'
import HamburgerLugares from '../components/HamburgerCompraLugares'

const CardsCompraLibro = () => {
    return (
        <>
            <NavBar />
            <h2 className='tituloInfo'>Libros</h2>
            <HamburgerLugares />
            <div className='conteiner-carta'>

                <CardInfo url={'http://localhost:8080/api/cards/compra/libros'} />
              
            </div>
        </>
    )
}

export default CardsCompraLibro

