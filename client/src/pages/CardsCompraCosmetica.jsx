import React from 'react'

import CardInfo from '../components/CardInfo'
import NavBar from './../components/NavBar';
import '../components/CardStyle.css'
import HamburgerLugares from '../components/HamburgerCompraLugares';



const CardsCompraCosmetica = () => {
    return (
        <>
            <NavBar />
            <h2 className='tituloInfo'>Productos de Cosmética</h2>
            <HamburgerLugares/>
            <div className='conteiner-carta'>

                <CardInfo url={'https://ecoconecta.onrender.com/api/cards/compra/cosmetica'} />

            </div>

        </>
    )
}

export default CardsCompraCosmetica
