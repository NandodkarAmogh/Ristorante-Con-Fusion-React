import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardTitle, CardText, Button,Modal, ModalBody, ModalHeader, Form, FormGroup, Input, Label, Col,Row } from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';
import LoadingComponent from './LoadingComponent'
// import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { Fade, Zoom } from 'react-awesome-reveal';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

     
    const RenderComments = ({comments, addComment, dishId}) => {
        console.log(comments)
        if (comments == null)
        return (<div></div>);

        const commentsList = comments.map((comment) => {
            let commentDate = new Date(Date.parse(comment.date));
            return(
                <Fade delay={2000}>
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
            <Zoom in>
                {commentsList}
            </Zoom>

            </ul>
        </div>
        );
    }

    

 
    const renderDish = (dish) => {
        console.log(dish[0])
        if (dish != null ) {
        return(
            <Fade
            delay={1500}>
                <Card>
                    <CardImg width = "60%" src={dish[0].strMealThumb} alt={dish[0].strMeal} />
                    <CardBody>
                        <CardTitle className='title'>{dish[0].strMeal}</CardTitle>
                        <CardText>Ingredients : <br/>{dish[0].strIngredient1}, {dish[0].strIngredient2}, {dish[0].strIngredient3}, {dish[0].strIngredient4}, {dish[0].strIngredient5}, {dish[0].strIngredient6}, {dish[0].strIngredient7}, {dish[0].strIngredient8}, {dish[0].strIngredient9}  {dish[0].strIngredient10}...</CardText>   
                    </CardBody>
                    
                </Card>
            </Fade>
        )}
        else {
            return (
                <div></div>
            )
        };
    }


const DishdetailComponent = (props) => {
    // props.comments.map(c => console.log(c))
    console.log(props.comments[0].dishId)
    if(props.isLoading) {
        return (
            <div className='background'>

                <div className='container'>
                    <div className='row'>
                        <LoadingComponent />
                    </div>
                </div>
            </div>
        )
    }
    else if (props.errMess) {
        return (
            <div className='background'>

                <div className='container'>
                    <div className='row'>
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        )
    }
    else if (props.dish != null) 

        return (
            <div className='background'>

                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to='/categories'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish[0].strMeal}</BreadcrumbItem>
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
                            <RenderComments comments = {props.comments} 
                                addComment = {props.addComment}
                                dishId = {props.comments[0].dishId}
                            />
                            <CommentForm dishId = {props.comments[0].dishId} addComment = {props.addComment}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    else
        return (
            <div></div>
        )
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
export default DishdetailComponent;
