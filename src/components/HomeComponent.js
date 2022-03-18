import React from 'react'
import RenderCardComponent from './RenderCardComponent';
import { baseUrl } from '../shared/baseUrl';
import { Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import RenderDishComponent from './RenderDishComponent';


const HomeComponent = ({dishes, leaders, promotions, promoLoading, promoErrMess, isLoading, errMess, leaderLoading, leaderErrMess}) => {
    const dish = dishes.dishes.meals;
    console.log(dish)
    const leader = leaders.filter((leader) => leader.featured === true)[0];
    const promotion = promotions.filter((promotion) => promotion.featured === true)[0]
    
    return (
        <div className='background'>
            <div className='container '>
                <div className="row align-items-start">
                    <div className="col-12 col-md-4 m-1"> 
                    <RenderDishComponent dish={dish} errMess = {errMess} isLoading={isLoading} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCardComponent item = {promotion} isLoading={promoLoading} errMess={promoErrMess}/>
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCardComponent item = {leader} isLoading={leaderLoading} errMess={leaderErrMess} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeComponent
