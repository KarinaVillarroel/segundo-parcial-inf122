import React, { useState } from 'react';
import MetaFormulario from './MetaFormulario';
import Meta from './Meta';
import '../hojas-de-estilo/ListadeMetas.css';

function ListadeMetas( ) {
    const [Metas, setMetas] = useState([]);

    const agregarMeta = Meta => {
      if (Meta.texto.trim()) {
          Meta.texto = Meta.texto.trim();
        const MetasActualizadas = [Meta, ... Metas];
        setMetas(MetasActualizadas);
      }
    }
  
    const eliminarMetas = id => {
      const MetasActualizadas = Metas.filter(Meta => Meta.id !== id);
      setMetas(MetasActualizadas);
    }
  
    const completarMeta = id => {
      const MetasActualizadas = Metas.map(Meta => {
        if (Meta.id === id) {
          Meta.completada = !Meta.completada;
        }
        return Meta;
      });
      setMetas(MetasActualizadas);
    }
    
    return (
      <>
        <MetaFormulario onSubmit={agregarMeta} />
        <div className='Meta-lista-contenedor'>
          {
            Metas.map((Metas) =>
              <Meta
                key={Meta.id}
                id={Meta.id} 
                texto={Meta.texto}
                completada={Meta.completada}
                completarMeta={completarMeta}
                eliminarMetas={eliminarMetas} />
            ) 
          }
        </div>
      </> 
    );  
}

export default ListadeMetas;