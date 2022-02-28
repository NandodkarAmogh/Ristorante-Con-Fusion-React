import React, {useState} from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import RenderCardComponent from './RenderCardComponent';
import { Link } from 'react-router-dom';
import LoadingComponent from './LoadingComponent';

const MenuComponent = (props) => {
    // let [selectedDish,setSelectedDish] = useState(0)
    
    const menu = props.dishes.dishes.map((dish) => {
        console.log(dish)
        return (
            <div key = {dish.id} className = "col-12 col-md-5 m-1">
                
                <Card>
                    <Link to={`/menu/${dish.id}`} >
                        <CardImg width = "100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle className='title'>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                </Card>    
            </div>
        );
    });

    if(props.dishes.isLoading) {
        return (
            <div className='container'>
                <div className='row'>
                    <LoadingComponent />
                </div>
            </div>
        )
    }
    else if (props.dishes.errMess) {
        return (
            <div className='container'>
                <div className='row'>
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        )
    } 
    else
        return (
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
                {menu}
                </div>
            </div>
        )
}

export default MenuComponent

