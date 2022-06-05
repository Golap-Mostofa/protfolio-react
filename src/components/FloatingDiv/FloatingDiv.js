import React from 'react';
import './FloatingDiv.css'
const FloatingDiv = ({img,tex1,tex2}) => {
    return (
        <div className='floatingdiv'>
            <img src={img} alt="" />
            <span>
                {tex1}
                <br />
                {tex2}
            </span>
        </div>
    );
};

export default FloatingDiv;