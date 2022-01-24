import logo from './logo.svg';
import './App.css';
import CountriesContainer from './containers/CountriesContainer';
import { useEffect, useState } from 'react';

function App() {

  const [message, setMessage] = useState('');


  useEffect(() => {
    fetch('http://localhost:5000/')
    .then(res => res.json())
    .then(data => setMessage(data.message));
  })


  return (
    <>
   <CountriesContainer/>
   <p>The server said:{message}</p>
   </>
  );
}

export default App;
