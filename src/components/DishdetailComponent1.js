import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


const renderDish = (dish) => {
    if (dish != null ) {
    return(
        <FadeTransform
        in
        transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
        }}>
            <Card>
                <CardImg width = "60%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle className='title'>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>   
                </CardBody>
                
            </Card>
        </FadeTransform>
    )}
    else {
        return (
            <div></div>
        )
    };
}


function RenderComments({comments, addComment, dishId}) {
    if (comments == null)
        return (<div></div>);

    const commentsList = comments.map((comment) => {
        let commentDate = new Date(Date.parse(comment.date));
        return(
            <Fade in>
            <li key = {comment.id}>
                <p>{comment.comment}</p>
                <p>
                --{comment.author}, {commentDate.toLocaleDateString('en-us', {month:'short', day:'numeric', year:'numeric'})}
                </p>
            </li>
            </Fade>
        );
       
    });
    return (
    <div>
        <h3>Comments</h3>
        <ul className="list-unstyled">
        <Stagger in>
            {commentsList}
        </Stagger>

        </ul>
    </div>
    );
   
}
const  DishdetailComponent1 = (props) => {
   if(props.dish != null){
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
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
                        
                        <RenderComments comments={props.comments} />
                        <CommentForm dishId = {props.dish.id} addComment = {props.addComment}/>
                    </div>
                </div>
                </div>
        );
    } else {
        return(<div></div>);
    }   
}

const CommentForm = (props) => {
    console.log(props)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    const handleSubmit = (values) =>{
        toggleModal();
        
        props.addComment(props.dishId, values.rating, values.name, values.comment);
        console.log(props.dishId)
    }
    
        return (
            <div>
                <Button outline onClick = {toggleModal}>
                      <span className = "fa fa-pencil fa-lg"></span> Submit a Comment
                </Button>
                <Modal isOpen={isModalOpen} toggle = {toggleModal}>
                    <ModalHeader toggle = {toggleModal}>Submit a Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => handleSubmit(values)}>
                    <Row className="form-group">
                            <Label htmlFor="rating" md={2}>Rating</Label>
                            <Col md={10}>
                                <Control.select className="form-control" defaultValue="1" id="rating" model=".rating" name="rating">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Control.select>
                            </Col>
                        </Row>
                    <Row className="form-group">
                                <Label htmlFor="name" md={2}>Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Name"
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                           
                        
    
                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>

                    </ModalBody>
                </Modal>
                <RenderComments comments={props.comments}
                    addComment={props.addComment}
                    dishId={props.dishId}
                />                            
            </div>
        );
    }

export default DishdetailComponent1;