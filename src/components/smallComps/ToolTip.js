import React from 'react';

const toolTip = (props) => {
    return (
        <div className='toolTip'>
            <div className='toolTip__interno'>{props.textoInterno}</div>
            {props.children}
        </div>
    );
}

export default toolTip;