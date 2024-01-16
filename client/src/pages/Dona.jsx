import React from 'react'

import NavBar from '../components/NavBar'
import CardsDona from '../components/CardsDona'

const Dona = () => {
    return (
        <div>
            <NavBar />
            <section className="encabezado1">
                <h1>EcoDoná</h1>

                <p id="descripcion">En esta sección vas a encontrar una lista de lugares en donde vas a poder donar objetos de
                    distintos tipos
                </p>
            </section>

            <section className="cartas">
                <article>
                <CardsDona />
                </article>
            </section>
        </div>
    )
}

export default Dona
