import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Formulario from '../components/Formulario';
import './Nosotros.css'

const Nosotros = () => {
    return (
            <div>
                <NavBar />
                <div className='formularioU'>
                <div className='informacion'>
                <h2>SOBRE NOSOTRAS</h2>
            <img src="img/cinco.jpg" alt=""/>
            <p>Hola! Somos un grupo de mujeres aprendiendo Programación Web Full Stack con la Fundación Pescar. Estamos desarrollando una plataforma que conecta organizaciones que aceptan donaciones en Córdoba con personas generosas y emprendedores sostenibles con aquellos que buscan consumir de manera amigable con el medio ambiente. <span className='spanNosotros'>¡Queremos conocer todas las propuestas en Córdoba para asegurarnos de incluir a todos! ¡Ayúdanos compartiendo información valiosa para nuestra página web!</span></p>
                </div>
                <div className='infoForm'>
                <Formulario/>
                </div>
                
                </div>
                
            </div>
        
    )
}

export default Nosotros
