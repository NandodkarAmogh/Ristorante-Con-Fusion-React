import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';

const RenderCardComponent = ({item}) => {
    if(item.id != null) {
        return (
            <Card>
                <CardImg src= {item.image} alt= {item.name} />
                <CardBody>
                    <CardTitle className='title'>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        )
    }
    else {
        return(
            <div></div>
        )
    }
}

export default RenderCardComponent
