import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import LoadingComponent from './LoadingComponent';
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
            <Zoom >
                <Card style={{borderRadius:'50px'}} >
                    <CardImg src={item.image} alt={item.name} width="100%"/>
                    <CardBody style={{background: '#4E8D7C', color: 'white'}}>
                    <CardTitle tag='h4'>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle tag="h6">{item.designation}</CardSubtitle> : null }
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
