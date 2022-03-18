import React, {useState} from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import LoadingComponent from './LoadingComponent';

const MenuComponent = (props) => {
    
    const menu = props.dishes.dishes.meals?.map((dish) => {
        
        
        return (
            <div key = {dish.idMeal} className = "col-12 col-md-5 m-1 col-sm-6">
                
                <Card>
                    <Link  to={`/categories/${dish.strMeal}/${dish.idMeal}`} >
                        <CardImg width = "100%" src={dish.strMealThumb} alt={dish.strMeal} />
                        <CardImgOverlay>
                            <CardTitle className='title'>{dish.strMeal}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                </Card>    
            </div>
        );
    });

    if(props.dishes.isLoading) {
        return (
            <div className='background'>

            <div className='container'>
                <div className='row'>
                    <LoadingComponent />
                </div>
            </div>
            </div>
        )
    }
    else if (props.dishes.errMess) {
        return (
            <div className='background'>

                <div className='container'>
                    <div className='row'>
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        )
    } 
    else if(!props.dishes.dishes) {
        return (
            <div className='background'>

                <div className = "container">
                    <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />    
                    </div>    
                    </div>
                    <div className = "row">
                    No dishes available! Please go back to  <Link to={`/categories`}> Menu</Link>
                    </div>
                </div>
            </div>
            
        )
    }
    else 
        return (
            <div className='background'>

                <div className = "container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr />    
                        </div>    
                        <div className = "row">
                        {menu}
                        </div>
                    </div>
                </div>
            </div>
        )    
}

export default MenuComponent

