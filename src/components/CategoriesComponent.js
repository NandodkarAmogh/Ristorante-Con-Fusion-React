import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import LoadingComponent from './LoadingComponent';

const CategoriesComponent = (props) => {
    
    
    
    console.log(props)
    const allCategories = props.categories?.map((category) => {
        
        return (
            <div key = {category.idCategory} className = "col-12 col-md-6 mb-2">
                
                <Card onClick={() => props.setString(category.strCategory)}>
                    <Link  to={`/categories/${category.strCategory}`} >
                        <CardImg  width = "100%" src={category.strCategoryThumb} alt={category.strCategory} />
                        <CardImgOverlay>
                            <CardTitle className='title'>{category.strCategory}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                </Card>    
            </div>
        );
    });

    if(props.isLoading) {
        return (
            <div className='container'>
                <div className='row'>
                    <LoadingComponent />
                </div>
            </div>
        )
    }
    else if (props.errMess) {
        return (
            <div className='container'>
                <div className='row'>
                    <h4>{props.errMess}</h4>
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
                        <BreadcrumbItem active>Categories</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Categories</h3>
                        <hr />    
                    </div>    
                    </div>
                    <div className = "row">
                    {allCategories}
                    </div>
                </div>

            </div>
        )
}

export default CategoriesComponent