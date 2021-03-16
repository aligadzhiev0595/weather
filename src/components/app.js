import React, {useState} from 'react';
import Form from './form';
import Weather from './weather';
import ErrorWarn from './errorWarn';


function App() {
  const [weather,
    setWeather] = useState({});
  const [city,
    setCity] = useState('');
    const [errorWarn,
     setErrorWarn] = useState('');
  return (
    <div className='app'>
      <div className="weather-container">
        <Form setErrorWarn={setErrorWarn} setWeather={setWeather} city={city} setCity={setCity}/>
        {Object.keys(weather).length === 0 ? <div></div>:
        <Weather weather={weather}/>}
          {errorWarn === '' ? '' :
        <ErrorWarn errorWarn={errorWarn}/>}  
      </div>
    </div>
  );
}

export default App;