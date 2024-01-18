import React, { useState } from 'react';
import '../hojas-de-estilo/MetaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function  MetaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault();
    
    const MetaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(MetaNueva);
  }

  return (
    <form 
      className='Meta-formulario'
      onSubmit={manejarEnvio}>
      <input 
        className='Meta-input'
        type='text'
        placeholder='Nueva Meta....'
        name='texto'
        onChange={manejarCambio}
      />
      
      <button className='Meta-boton'>
        Agregar  
      </button>
         
    </form>
  );
}

export default MetaFormulario;