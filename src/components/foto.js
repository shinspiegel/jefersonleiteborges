import React from 'react';
import imagemPerfil from '../img/perfil.png'

const foto = () => {
    console.log();

    return (
        <div className='foto'>
            <img className='foto__imagem' src={imagemPerfil} />
        </div>
    );
}

export default foto;