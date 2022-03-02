import React from 'react'
import RenderCardComponent from './RenderCardComponent';
import { baseUrl } from '../shared/baseUrl';



const HomeComponent = ({dishes, leaders, promotions, promoLoading, promoErrMess, isLoading, errMess, leaderLoading, leaderErrMess}) => {
    console.log(promotions)
    const dish = dishes.filter((dish) => dish.featured === true)[0];
    const leader = leaders.filter((leader) => leader.featured === true)[0];
    const promotion = promotions.filter((promotion) => promotion.featured === true)[0]
    return (
        <div className='container'>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCardComponent item = {dish} isLoading={isLoading} errMess={errMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCardComponent item = {promotion} isLoading={promoLoading} errMess={promoErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCardComponent item = {leader} isLoading={leaderLoading} errMess={leaderErrMess} />
                </div>
            </div>
        </div>
    )
}

export default HomeComponent
