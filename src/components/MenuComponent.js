import React, {useState} from 'react';
import { Card, CardImg, CardImgOverlay, CardText,CardBody, CardTitle } from 'reactstrap';
import DishdetailComponent from './DishdetailComponent';

const MenuComponent = ({dishes}) => {
    let [selectedDish,setSelectedDish] = useState([])
    const menu = dishes.map((dish) => {
        return (
            <div key = {dish.id} className = "col-12 col-md-5 m-1">
                <Card onClick={() => setSelectedDish(selectedDish = dish)}>
                    <CardImg width = "100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                    
                </Card>    
            </div>
        );
    });


    const renderDish = (dish) => {
        if (dish !== null ) {
            return(
                <Card>
                    <CardImg width = "50%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>   
                    </CardBody>

                </Card>
            )
        }
        else {
            return(
                <div></div>
            );
        }
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
                    {/* <div className='col-12 col-md-5'>
                        {renderComments(selectedDish)}
                    </div> */}
                    <DishdetailComponent selectedDish = {selectedDish} />
                    
                </div> 
        </div>
    )
}

export default MenuComponent

