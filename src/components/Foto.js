import React from 'react';
import imagemPerfil from '../img/perfil.png'

const foto = () => {
    return (
        <section className='foto'>
            <img className='foto__imagem' src={imagemPerfil} alt='Imagem Perfil'/>
        </section>
    );
}

export default foto;