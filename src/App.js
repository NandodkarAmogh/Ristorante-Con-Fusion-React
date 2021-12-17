import React from 'react';
import { DISHES } from './shared/dishes';
import { Navbar,NavbarBrand } from 'reactstrap';
import MenuComponent from './components/MenuComponent';


const App = () => {
  const dishes = DISHES;
  return (
  <div className="App">
    <Navbar dark color = "primary">
      <div className = "container">
        <NavbarBrand href = "/">Ristorante Con Fusion</NavbarBrand>  
      </div>  
    </Navbar>
    <MenuComponent dishes = {dishes} />
    </div>
  )
}

export default App







