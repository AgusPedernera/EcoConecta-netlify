import React from 'react'
import './CardStyle.css'


const Card = (props) => {

    return (


        <div>
            <article >
                <img src={props.foto} className="snap" />
                <a href={props.direccion} className='linkCat'>{props.h2}</a>

            </article>
        </div>
    )
}

export default Card
