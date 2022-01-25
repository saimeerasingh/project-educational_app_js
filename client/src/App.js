import logo from './logo.svg';
import './App.css';
import CountriesContainer from './containers/CountriesContainer';
import { useEffect, useState } from 'react';

function App() {

  const [message, setMessage] = useState('');


  useEffect(() => {
    fetch('http://localhost:5000/api/funfacts')
    .then(res => res.json())
    .then(data => setMessage(data.message));
  })


  return (
    <>
   <CountriesContainer/>
   {message.map(x => x.funfact)}
   </>
  );
}

export default App;
