import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import LoadingComponent from './LoadingComponent';
import { Zoom } from 'react-awesome-reveal';

const RenderDishComponent = ({dish, errMess, isLoading}) => {
    if(isLoading) {
        return (
            <LoadingComponent />
        )
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        )
    }

    else if(dish != null) {
        return (
            <Zoom >
                <div >
                    {dish && <Card >
                        <CardImg src={dish[0].strMealThumb} alt={dish[0].strMeal} />
                        <CardBody style={{background: '#4E8D7C', color: 'white'}}>
                        <CardTitle tag='h4'>{dish[0].strMeal}</CardTitle>
                        {dish[0].strIngredient1 ? <CardSubtitle>{dish.strIngredient1}</CardSubtitle> : null }
                        <CardText className='mb-4'>Ingredients:<br/> {dish[0].strIngredient1}, {dish[0].strIngredient2}, {dish[0].strIngredient3}, {dish[0].strIngredient4}, {dish[0].strIngredient5}, {dish[0].strIngredient6}, {dish[0].strIngredient7}, {dish[0].strIngredient8}, {dish[0].strIngredient9}, {dish[0].strIngredient10}, {dish[0].strIngredient11}, {dish[0].strIngredient12}, {dish[0].strIngredient13},...</CardText>
                        </CardBody>
                    </Card>}
                </div>
            </Zoom>
        )
    }
    else {
        return(
            <div></div>
        )
    }
}

export default RenderDishComponent