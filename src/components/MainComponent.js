import React from 'react';
import HomeComponent from './HomeComponent';
import { DISHES } from '../shared/dishes';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import MenuComponent from './MenuComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import ContactComponent from './ContactComponent';

const MainComponent = () => {
    const dishes = DISHES;
    
    const HomePage = () => {
        return (
            <HomeComponent />
        )
    }
    
    return (
        <div>
            <HeaderComponent />
            {/* <MenuComponent dishes = {dishes} /> */}
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path= "/menu" component={() => <MenuComponent dishes = {dishes} />} />
                <Route exact path='/contactus' component ={ContactComponent} />
                <Redirect to="/home" />
            </Switch>
            <FooterComponent /> 
        </div>
    )
}

export default MainComponent
