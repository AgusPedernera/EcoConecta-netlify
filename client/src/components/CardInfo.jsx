import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CardStyle.css'
import { NavLink } from 'react-router-dom';

const CardInfo = (props) => {
    const [cardsData, setCardsData] = useState([]);
    const url = props.url

    useEffect(() => {
        // Define la función asincrónica para realizar la solicitud GET
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setCardsData(response.data);  // Actualiza el estado con los datos recibidos
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        // Llama a la función fetchData cuando el componente se monta
        fetchData();

        // Puedes agregar dependencias al arreglo de dependencias de useEffect si es necesario
    }, []);

    return (


        <div className='container-carta'>

            {
                cardsData.map((card) => (

                    <div className='cardsInfo' key={card._id}>
                        <strong className='nombre'>{card.nombre}</strong>
                        {/* <br /> Categoría: {card.categoria} */}
                        <div>
                            {/* <br /> Dirección: {card.direccion} 
                        <br /> Teléfono: {card.telefono}
                        <br /> Página Web: {card.paginaWeb}
                        <br /> Comentarios: {card.comentarios}
                        <br /> <NavLink to={card.instagram} className='intento'>Instagram</NavLink> */}

                            <p className='parrafo'>Direccion: <span>{card.direccion}</span></p>
                            {/* <p>Teléfono: <span>{card.telefono}</span></p> */}
                            <p className='parrafo'>Página Web: <NavLink to= {card.pagina_web}>{card.pagina_web}</NavLink></p>
                            <p className='parrafo'>Comentarios: <span>{card.comentarios}</span></p>
                            <p className='parrafo'><NavLink to={card.instagram} className='intento'>Instagram</NavLink></p>
                        </div>

                        <br /><br />
                    </div>

                    // Ajusta esta parte según la estructura de tus datos
                ))
            }
        </div>
    );
};

export default CardInfo;
