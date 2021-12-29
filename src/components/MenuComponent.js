import React, {useState} from 'react';
import { Card, CardImg, CardImgOverlay, CardText,CardBody, CardTitle } from 'reactstrap';
import DishdetailComponent from './DishdetailComponent';

const MenuComponent = ({dishes}) => {
    let [selectedDish,setSelectedDish] = useState(0)
    
    const menu = dishes.map((dish) => {
        console.log(dish)
        return (
            <div key = {dish.id} className = "col-12 col-md-5 m-1">
                <Card onClick={() => setSelectedDish(dish)}>
                    <CardImg width = "100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle className='title'>{dish.name}</CardTitle>
                    </CardImgOverlay>
                    
                </Card>    
            </div>
        );
    });


    const renderDish = (dish) => {
        // if (dish !== null ) {
        return(
            <Card>
                <CardImg width = "50%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle className='title'>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>   
                </CardBody>

            </Card>
        )
        // }
        // else {
        //     return(
        //         <div>Please select a dish</div>
        //     );
        // }
    }
    
    return (
        <div className = "container">
                 <div className = "row">
                    {menu}
                 </div>
                <div className='row'>
                    <div className='col-12 col-md-5'>
                        {renderDish(selectedDish)}
                    </div>
                    <DishdetailComponent Dish={selectedDish.comments} />
                </div> 
        </div>
    )
}

export default MenuComponent

