import React, { useEffect} from 'react';
import HomeComponent from './HomeComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import MenuComponent from './MenuComponent';
import ContactComponent from './ContactComponent';
import DishdetailComponent from './DishdetailComponent';
import AboutComponent from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect} from 'react-redux';
import { actions } from 'react-redux-form';
import { addComment } from '../redux/dishes/ActionCreators';
import { fetchDishes } from '../redux';

const mapStateToProps = state => {
    console.log(state)
    return {
        dishes:state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders,

        
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment : (dishId,rating, author, comment) => dispatch(addComment(dishId,rating, author, comment)),
        fetchDishes: () => {dispatch(fetchDishes())},
        resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
    }
}
const MainComponent = (props) => {
    console.log(props)
    
    useEffect(() => {
      props.fetchDishes();
    
       
    }, [])
    
    
    const DishWithId = ({match}) => {
        return (
            <DishdetailComponent dish={props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            comments={props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            addComment = {props.addComment}
            isLoading = {props.dishes.isLoading} 
            errMess = {props.errMess}
            />
        )
    }
    
    return (
        <div style={{backgroundColor: '#fafafa'}}>
            <HeaderComponent />
            

            <Switch>
                <Route path="/home" component={() => <HomeComponent dishes={props.dishes.dishes} leaders={props.comments.leaders} isLoading = {props.dishes.isLoading} errMess = {props.errMess} promotions={props.comments.promotions}/>} />
                <Route path="/aboutus" component={() => <AboutComponent leaders = {props.comments.leaders} />} />
                <Route exact path= "/menu" component={() => <MenuComponent dishes = {props.dishes} />} />
                <Route path="/menu/:dishId" component={DishWithId} />
                <Route exact path='/contactus' component ={() => <ContactComponent resetFeedbackForm = {props.resetFeedbackForm} />} />
                <Redirect to="/home" />
            </Switch>
            <FooterComponent /> 
        </div>
    )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent))


