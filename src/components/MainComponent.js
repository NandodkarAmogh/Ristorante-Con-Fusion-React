import React from 'react';
import HomeComponent from './HomeComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import MenuComponent from './MenuComponent';
import ContactComponent from './ContactComponent';
import DishdetailComponent from './DishdetailComponent';
import DishdetailComponent1 from './DishdetailComponent1';
import AboutComponent from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addComment } from '../redux/dishes/ActionCreators';

const mapStateToProps = state => {
    console.log(state)
    return {
        dishes:state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
        
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment : (dishId,rating, author, comment) => dispatch(addComment(dishId,rating, author, comment))
    }
}
const MainComponent = (props) => {
    console.log(props.addComment)
    
    
    const DishWithId = ({match}) => {
        return (
            <DishdetailComponent dish={props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            comments={props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            addComment = {props.addComment}
            />
        )
    }
    // const DishWithId = ({match}) => {
    //     return (
    //         <DishdetailComponent1 dish={props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
    //         comments={props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
    //         addComment = {props.addComment}
    //         />
    //     )
    // }
    return (
        <div style={{backgroundColor: '#fafafa'}}>
            <HeaderComponent />
            

            <Switch>
                <Route path="/home" component={() => <HomeComponent dishes={props.dishes} leaders={props.leaders} promotions={props.promotions}/>} />
                <Route path="/aboutus" component={() => <AboutComponent leaders = {props.leaders} />} />
                <Route exact path= "/menu" component={() => <MenuComponent dishes = {props.dishes} />} />
                <Route path="/menu/:dishId" component={DishWithId} />
                <Route exact path='/contactus' component ={ContactComponent} />
                <Redirect to="/home" />
            </Switch>
            <FooterComponent /> 
        </div>
    )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent))


