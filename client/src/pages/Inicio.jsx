import React from 'react'
import "./Inicio.css"
const Inicio = () => {
    return (

        <div className='general'>
            <section className="encabezado">
                <div id="logo">
                    <img src="img/logoVerde.png" alt="" />
                    <h1>EcoConectá</h1>

                </div>

                <p>Guía de lugares para donar y comprar sustentable en Córdoba Capital</p>
            </section>
            <section className="boton-central">
                <a href="/nosotros" >SUMÁ TU APORTE</a>
            </section>
            <section className="parte-inferior">
                <div>
                    <img src="img/dona.jpg" alt="dona" />
                    {/* <button className="dona">Doná</button> */}
                    <a href="/dona" >Doná</a>
                </div>
                <div>
                    <img src="img/compra.png" alt="compra" />
                    {/* <button className="compra" >Comprá</button> */}
                    <a href="/compra" >Comprá</a>
                </div>
            </section>

            <script src="js/proyecto_final.js"></script>
        </div>
    )
}

export default Inicio
