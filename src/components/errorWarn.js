
import React from 'react';
import img from '../img/sad.png';

const ErrorWarn = () => {
   return (
      <div className='error'>
         <img src={img} className='img' alt=""/>
         <p>oh, no Johhny</p>  
         <p>incorrect city</p>
      </div>
   );
};

export default ErrorWarn;