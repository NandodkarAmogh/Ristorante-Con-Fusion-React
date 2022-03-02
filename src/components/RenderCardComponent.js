import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import LoadingComponent from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { Zoom } from 'react-awesome-reveal';

const RenderCardComponent = ({item, isLoading, errMess}) => {
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

    else if(item.id != null) {
        return (
            <Zoom>
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </Zoom>
        )
    }
    else {
        return(
            <div></div>
        )
    }
}

export default RenderCardComponent
