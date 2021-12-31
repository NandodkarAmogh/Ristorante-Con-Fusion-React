import React, {useState} from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import DishdetailComponent from './DishdetailComponent';
import RenderCardComponent from './RenderCardComponent';
import { Link } from 'react-router-dom';

const MenuComponent = ({dishes}) => {
    let [selectedDish,setSelectedDish] = useState(0)
    
    const menu = dishes.map((dish) => {
        console.log(dish)
        return (
            <div key = {dish.id} className = "col-12 col-md-5 m-1">
                
                <Card onClick={() => setSelectedDish(dish)}>
                    {/* <Link to={`/menu/${dish.id}`} > */}
                    <CardImg width = "100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle className='title'>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>    
            </div>
        );
    });


    const renderDish = (dish) => {
        if (dish.id != null ) {
        return(
            
            <Card>
                <Link to={`/menu/${dish.id}`} >
                <CardImg width = "50%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle className='title'>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>   
                </CardBody>
                </Link>
            </Card>
        )}
        else {
            return (
                <div></div>
            )
        };
    }
    
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
                <div className='row'>
                    <div className='col-12 col-md-5'>
                        {renderDish(selectedDish)}
                        {/* <RenderCardComponent item = {selectedDish} /> */}
                    </div>
                    <DishdetailComponent Dish={selectedDish.comments} />
                </div> 
        </div>
    )
}

export default MenuComponent

