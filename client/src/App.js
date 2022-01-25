import logo from './logo.svg';
import './App.css';
import CountriesContainer from './containers/CountriesContainer';
import { useEffect, useState } from 'react';
import FunFactContainer from './containers/FunFactContainer';

function App() {

  
  return (
    <>
   <CountriesContainer/>
   <FunFactContainer/>
   </>
  );
}

export default App;
