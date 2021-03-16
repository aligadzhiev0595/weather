import React from 'react';
import axios from 'axios';

const Form = ({setWeather, city, setCity, setErrorWarn}) => {
  const getWeather = (e) => {
    e.preventDefault();
    const API_KEY = '78c2bb8e436f1c1380c4059b0c4dadc8';
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(({data}) => setWeather(data))
    .catch((er)=>setErrorWarn(er));    
     setCity('');
    setErrorWarn('');
    setWeather('');
  };
  const inputHandler = (e) => {
    setCity(e.target.value);
  };
  return (
    <form className='form' onSubmit={getWeather}>
      <div className="shadow">
        <input className='input' type='text' placeholder='Search city'
          onChange={inputHandler} value={city}/>
        <button className='btn' type='submit'> </button>
      </div>
    </form>
  );
};

export default Form;