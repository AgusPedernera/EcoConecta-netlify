import React from 'react'
import './Formulario.css'
const Formulario = () => {
  return (
    <div className='formAporte'>
    <h3>AYUDANOS SUMANDO TU APORTE</h3>
    <form action="https://formsubmit.co/ecoconecta.oficial@gmail.com" method="POST" >
      <div className='disp'>
      <div className="name">
      <label htmlFor="name"></label>
      <input className="control" type="text" placeholder="Nombre del Lugar" name="name" id="name_input" required/>
    </div>
      <br />

      <div className="tipo">
      <label htmlFor="tipo"></label>
      <select className="control" placeholder="Tipo" name="tipo" id="tipo_input" required>
        {/* <option disabled hidden selected>Tipo</option> */}
        <option>Comprar</option>
        <option>Donar</option>
      </select>
    </div>
    </div>
      <br />
      <label htmlFor="direccion"></label>
      <input className="controls" type="text" id="direccion" name="direccion" placeholder="Direccion del lugar" />
      <br />
      <label htmlFor="telefono"></label>
      <input className="controls" type="tel" id="telefono" name="telefono" placeholder="Telefono de Contacto"/>
      <br />
      <label htmlFor="instagram"></label>
      <input className="controls" type="text" id="instagram" name="instagram" placeholder='Instagram' />
      <br />
      <label htmlFor="paginaWeb"></label>
      <input className="controls" type="url" id="paginaWeb" name="paginaWeb" placeholder='Página Web' />
      <br />
      <label htmlFor="comentarios"></label>
      <textarea className="controls" id="comentarios" name="comentarios" placeholder='Comentarios'></textarea>
      <br />

      <input className='boton' type="submit" value="ENVIAR" />
      <input type="hidden" name="_next" value="https://ecoconecta0.netlify.app/nosotros" />
      <input type="hidden" name='_captcha' value="false" />
      <input type="hidden" name="_subject" value="Nuevo Aporte"/>

    </form>
    </div>
  )
}

export default Formulario