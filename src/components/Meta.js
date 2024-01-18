import React from 'react';
import '../hojas-de-estilo/Meta.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Meta({ id, texto, completada, completarMeta, eliminarMetas }) {
  return (
    <div className={completada ? 'Meta-contenedor completada' : 'Meta-contenedor'}>
      <div 
        className='Meta-texto'
        onClick={() => completarMeta(id)}>
        {texto}
      </div>
      <div 
        className='Meta-contenedor-iconos'
        onClick={() => eliminarMetas(id)}>
        <AiOutlineCloseCircle className='Meta-icono' />
      </div>
    </div>
  );    
}

export default Meta;