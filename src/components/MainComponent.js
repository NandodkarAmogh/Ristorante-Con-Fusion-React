import React, { useEffect, useState} from 'react';
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
import { addComment,postFeedback, fetchDishes, fetchComments, fetchPromos, fetchLeaders, fetchCategories } from '../redux';
import CategoriesComponent from './CategoriesComponent';


const mapStateToProps = state => {
    console.log(state)
    return { 
        dishes:state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders,
        form: state.form,
        categories : state.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDishes: (string) => {dispatch(fetchDishes(string))},
        fetchComments: () => {dispatch(fetchComments())},
        fetchPromos: () => {dispatch(fetchPromos())},
        fetchLeaders: () => {dispatch(fetchLeaders())},
        fetchCategories: () => {dispatch(fetchCategories())},
        addComment: (dishId, rating, author, comment) => {dispatch(addComment(dishId, rating, author, comment))},
        postFeedback: (firstname, lastname, telnum, email, agree, contactType, message, id) => {dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message, id))},
        resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
    }
}
const MainComponent = (props) => {
    const [string, setString] = useState('chicken')
    const [random, setRandom] = useState(null)
    
    useEffect(() => {
        props.fetchDishes(string);
        props.fetchComments();
        props.fetchLeaders();
        props.fetchPromos();
        props.fetchCategories();
        
    }, [string])

    useEffect(() => {
        setRandom(Math.floor(Math.random() * 4))
    }, [])
    
    
    
    const DishWithId = ({match}) => {
        return (
            <DishdetailComponent dish={props.dishes.dishes.meals?.filter((dish) => dish.idMeal === match.params.idMeal)}
            comments={props.comments.comments.filter((comment) => comment.dishId === random)}
            addComment = {props.addComment}
            isLoading = {props.dishes.isLoading} 
            errMess = {props.dishes.errMess}
            commentsErrMess = {props.comments.errMess}
            random ={random}
            />
        )
    }
    
    return (
        <div >
            <HeaderComponent />
            

            <Switch>
                <Route path="/home" component={() => <HomeComponent dishes={props.dishes} isLoading = {props.dishes.isLoading} leaders={props.leaders.leaders} promoLoading={props.promotions.isLoading} errMess = {props.dishes.errMess}
                promoErrMess={props.promotions.errMess} 
                leaderLoading = {props.leaders.isLoading}
                leaderErrMess = {props.leaders.errMess}
                promotions={props.promotions.promotions}/>} />
                <Route path="/aboutus" component={() => <AboutComponent leaders = {props.leaders.leaders} leaderLoading = {props.leaders.isLoading}
                leaderErrMess = {props.leaders.errMess}/>} />
                <Route exact path= "/categories" component={() => <CategoriesComponent 
                    categories = {props.categories.categories.categories}
                    categoriesIsLoading = {props.categories.isLoading}
                    categoriesErrMess = {props.categories.errMess}
                    setString = {setString}
                />} />
                <Route exact path= "/categories/:strCategory" component={() => <MenuComponent dishes = {props.dishes} />} />
                <Route path="/categories/:strCategory/:idMeal" component={DishWithId} />
                <Route exact path='/contactus' component ={() => <ContactComponent resetFeedbackForm = {props.resetFeedbackForm} postFeedback = {props.postFeedback}/>} />
                <Redirect to="/home" />
            </Switch>
            <FooterComponent /> 
        </div>
    )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent))


