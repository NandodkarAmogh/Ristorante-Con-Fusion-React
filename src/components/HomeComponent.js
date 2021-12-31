import React from 'react'
import RenderCardComponent from './RenderCardComponent'


const HomeComponent = (props) => {
    return (
        <div className='container'>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCardComponent item = {props.dish}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCardComponent item = {props.promotion}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCardComponent item = {props.leader}/>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent
