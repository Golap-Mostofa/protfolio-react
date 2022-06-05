import React from 'react';
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import instagram from '../../img/instagram.png'
import vector1 from '../../img/Vector1.png' 
import vector2 from '../../img/Vector2.png' 
import boy from '../../img/boy.png' 
import thumbup from '../../img/thumbup.png' 
import crown from '../../img/crown.png' 
// import glassesimoj1 from '../../img/glassesimoj1.png'

import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
const Intro = () => {
    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am </span>
                    <span>Andro thomas</span>
                    <span>Hello i am web devloper in react js project my expreance 2year</span>
                </div>

                <button className="button i-button">Hear Me</button>
                {/* icone */}
                <div className="i-icons">
                    <img src={github} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={instagram} alt="" />
                </div>

            </div>

            <div className="i-right"> 
                <img src={vector1} alt="" />
                <img src={vector2} alt="" />
                <img src={boy} alt="" />
                <div>
                    <FloatingDiv img={crown} tex1='web' tex2='Developer' />
                </div>
            </div>
        </div>
    );
};

export default Intro;