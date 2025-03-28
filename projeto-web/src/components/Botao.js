import React from 'react';

const Botao = ( {texto, aoClicar}) => {
    return(
        <button onClick={aoClicar}>
           {texto}
        </button>
    )
}


export default Botao;