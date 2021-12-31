import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

    
    const renderComments = (comments) => {
        if (comments != null ) {
            
            const data = []

                for(let comment in comments) {
                    data.push(comments[comment])
                }
            return(
                <main>
                    <h3 style={{textAlign : 'center'}} >Comments</h3>
                    <ul style={{listStyleType : 'none'}}>
                        {data.map((comment) => (<li key={comment.id}><br></br>{comment.comment}<br></br><br></br><span > --{comment.author} </span> <span > , {comment.date}</span></li>))}
                    </ul>
                </main>        
            )
        }
        else {
            return(
                <div>Please select a dish</div>
            )
        }
    }

 
    const renderDish = (dish) => {
        if (dish != null ) {
        return(
            
            <Card>
                <CardImg width = "60%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle className='title'>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>   
                </CardBody>
                
            </Card>
        )}
        else {
            return (
                <div></div>
            )
        };
    }


const DishdetailComponent = (props) => {
    if (props.dish != null)  
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />    
                    </div>    
                 </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {renderDish(props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {renderComments(props.comments)}
                    </div>
                    
                </div>
            </div>
        )
    else
        return (
            <div></div>
        )
}



export default DishdetailComponent;
