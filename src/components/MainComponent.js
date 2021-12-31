import React from 'react';
import HomeComponent from './HomeComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import MenuComponent from './MenuComponent';
import ContactComponent from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import DishdetailComponent from './DishdetailComponent';
import AboutComponent from './AboutComponent';


const MainComponent = () => {
    const dishes = DISHES;
    const comments = COMMENTS;
    const leaders = LEADERS;
    const promotions = PROMOTIONS;
    console.log(comments)
    
    const HomePage = () => {
        return (
            <HomeComponent dish = {dishes.filter((dish) => dish.featured === true)[0]}
            leader = {leaders.filter((leader) => leader.featured === true)[0]}
            promotion = {promotions.filter((promotion) => promotion.featured === true)[0]} 
            />
        )
    }
    
    const DishWithId = ({match}) => {
        return (
            <DishdetailComponent dish={dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            comments={comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            />
        )
    }

    return (
        <div>
            <HeaderComponent />
            {/* <MenuComponent dishes = {dishes} /> */}
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route path="/aboutus" component={() => <AboutComponent leaders = {leaders} />} />
                <Route exact path= "/menu" component={() => <MenuComponent dishes = {dishes} />} />
                <Route path="/menu/:dishId" component={DishWithId} />
                <Route exact path='/contactus' component ={ContactComponent} />
                <Redirect to="/home" />
            </Switch>
            <FooterComponent /> 
        </div>
    )
}

export default MainComponent
