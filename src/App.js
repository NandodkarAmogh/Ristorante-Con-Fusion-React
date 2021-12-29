import React from 'react';
import MainComponent from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter >  
      <div >
        <MainComponent />
      </div>
    </BrowserRouter>
  )
}

export default App







