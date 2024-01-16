import React from 'react'
import NavBar from './../components/NavBar';
import CardsCompra from '../components/CardsCompra';
import "./DonaCompra.css"


const Compra = () => {
    return (
        <>
            <NavBar />
            <div>
                <section className="encabezado1">
                    <h1>EcoComprá</h1>
                    <p id="descripcion">En esta sección vas a encontrar una lista de lugares en donde vas a poder comprar artículos en
                        emprendimientos sustentables</p>
                </section>
                <section className="cartas">
                    <article>
                        <CardsCompra />
                    </article>

                </section>

            </div >
        </>
    )
}

export default Compra
