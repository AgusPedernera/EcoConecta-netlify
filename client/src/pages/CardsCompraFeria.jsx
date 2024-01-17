import React from 'react'
import CardInfo from '../components/CardInfo'
import NavBar from './../components/NavBar';
import './CardStyles.css'
import HamburgerLugares from '../components/HamburgerCompraLugares';



const CardsCompraFeria = () => {

    return (
        <>
            <NavBar />
            <h2 className='tituloInfo'>Ferias</h2>
            <HamburgerLugares />
            <div className='conteiner-carta'>
                <CardInfo url={'https://ecoconecta.onrender.com/api/cards/compra/ferias'} />
            </div>
        </>

    )
}

export default CardsCompraFeria
