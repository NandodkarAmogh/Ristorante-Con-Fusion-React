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
import { addComment,postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux';


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
        // addComment : (dishId,rating, author, comment) => dispatch(addComment(dishId,rating, author, comment)),
        fetchDishes: () => {dispatch(fetchDishes())},
        fetchComments: () => {dispatch(fetchComments())},
        fetchPromos: () => {dispatch(fetchPromos())},
        fetchLeaders: () => {dispatch(fetchLeaders())},
        postComment: (dishId, rating, author, comment) => {dispatch(postComment(dishId, rating, author, comment))},
        resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
    }
}
const MainComponent = (props) => {
    console.log(props)
    
    useEffect(() => {
      props.fetchDishes();
      props.fetchComments();
      props.fetchLeaders();
      props.fetchPromos();
        
       
    }, [])
    
    
    const DishWithId = ({match}) => {
        return (
            <DishdetailComponent dish={props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            comments={props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            postComment = {props.postComment}
            isLoading = {props.dishes.isLoading} 
            errMess = {props.dishes.errMess}
            commentsErrMess = {props.comments.errMess}
            />
        )
    }
    
    return (
        <div style={{backgroundColor: '#fafafa'}}>
            <HeaderComponent />
            

            <Switch>
                <Route path="/home" component={() => <HomeComponent dishes={props.dishes.dishes} isLoading = {props.dishes.isLoading} leaders={props.leaders.leaders} promoLoading={props.promotions.isLoading} errMess = {props.dishes.errMess}
                promoErrMess={props.promotions.errMess} 
                leaderLoading = {props.leaders.isLoading}
                leaderErrMess = {props.leaders.errMess}
                promotions={props.promotions.promotions}/>} />
                <Route path="/aboutus" component={() => <AboutComponent leaders = {props.leaders.leaders} leaderLoading = {props.leaders.isLoading}
                leaderErrMess = {props.leaders.errMess}/>} />
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


