import React from 'react';
import MainComponent from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
// import { ConfigureStore } from './redux/configureStore';



const App = () => {
  console.log(store.getState());
  
  return (
    <Provider store={store}>
      <BrowserRouter >  
        <div className='App'>
          <MainComponent />
        </div>
      </BrowserRouter>
    </Provider>
    
  )
}

export default App







