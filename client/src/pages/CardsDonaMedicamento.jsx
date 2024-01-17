import React from 'react'
import NavBar from './../components/NavBar';
import CardInfo from '../components/CardInfo';
import './CardStyles.css'
import HamburgerLugares from '../components/HamburgerDonaLugares';

const CardsDonaMedicamento = () => {
    return (
        <>
            <NavBar />
            <h2 className='tituloInfo'>Medicamentos</h2>
            <HamburgerLugares />
            <div className='conteiner-carta'>

                <CardInfo url={'https://ecoconecta.onrender.com/api/cards/dona/medicamentos'} />

            </div>
        </>
    )
}

export default CardsDonaMedicamento
