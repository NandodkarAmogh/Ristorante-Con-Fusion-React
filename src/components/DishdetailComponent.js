import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardTitle, CardText, Button,Modal, ModalBody, ModalHeader, Form, FormGroup, Input, Label, Col,Row } from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';
import ReactLoading from 'react-loading';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

    
    const RenderComments = ({comments, addComment, dishId}) => {
        console.log(comments)
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
    
        
        
        
        
        // console.log(comments)
        // if (comments != null ) {
            
        //     const data = []
            

        //         for(let comment in comments[1]) {
        //             data.push(comments[comment])
        //             console.log(data)
        //         }
        //     return(
        //         <main>
        //             <h3 style={{textAlign : 'center'}} >Comments</h3>
        //             <ul style={{listStyleType : 'none'}}>
        //                 {data.map((comment) => (<li key={comment.id}><br></br>{comment.comment}<br></br><br></br><span > --{comment.author} </span> <span > , {comment.date}</span></li>))}
        //             </ul>
        //         </main>        
        //     )
        // }
        // else {
        //     return(
        //         <div>Please select a dish</div>
        //     )
        // }
    }

    

 
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


const DishdetailComponent = (props) => {
    console.log(props.dish.id)
    const initialValues = {
        userName: '',
        rating: 1,
        message:''
    };
    
    const [isSubmit, setIsSubmit] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ formValues, setformValues] = useState (initialValues);
    const [formErrors, setFormErrors] = useState({});
    // const maxLength = (len) => (val) => !(val) || (val.length <= len);
    // const minLength = (len) => (val) => val && (val.length >= len);


    // const validate = (values) => {
    //     const errors = {};

    //     if (!values?.userName){
    //         errors.userName="Your Name is required"
    //     }
    //     else if(values.userName?.length < 3) {
    //         errors.userName = "Your Name must be between 3 to 8 alphabets!";
    //     }else if (values.userName?.length > 15) {
    //         errors.userName= "Your Name too long!";
    //     }

    //     return errors;
    // }
    
    
    // const handleSubmit = (event) => {
    //     console.log('current state is: ', formValues);
    //     setIsSubmit(true) ;
    //     event.preventDefault();
    //     setformValues(initialValues);
    //     toggleModal();
    // }

    // const handleSubmit = (values) => {
    //    toggleModal();
    //    props.addComment(props.dishId, values.rating, values.author, values.comment )
    // }
    
    // useEffect(() => {
    //     console.log(formErrors);
    //     if(Object.keys(formErrors).length === 0 && isSubmit) {
    //         console.log(formValues);
    //     }
    // }, [formErrors]) ;

    // const toggleModal = () => {
       
    //     setIsModalOpen(!isModalOpen);
    // }
    // const handleInputChange = (event) => {
    //     const target = event.target;
    //     setFormErrors(validate(formValues));
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    //     setformValues({
    //         ...formValues,
    //         [name] : value
            
    //     });
    //     console.log(formValues)
    // }

    if (props.dish != null)  
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
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
                        <RenderComments comments = {props.comments} 
                            addComment = {props.addComment}
                            dishId = {props.dish.id}
                        />
                        <CommentForm dishId = {props.dish.id} addComment = {props.addComment}/>
                        {/* <Button style={{marginLeft: '2rem'}} outline onClick={toggleModal}>
                            <span className='fas fa-pencil fa-lg'></span>Submit Comment
                        </Button> */}
                    </div>
                    {/* <Modal isOpen={isModalOpen} toggle={toggleModal}>
                        <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody> */}
                            {/* <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label htmlFor = "rating">Rating</Label>
                                    <Input type='select' name='rating' value={formValues.rating} onChange={handleInputChange} >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor= "userName" md={12}>
                                        Your Name
                                    </Label>
                                    <Col md={12}>
                                        <Input type='text' id='userName' name='userName' 
                                        placeholder='Your Name' value={formValues.userName}
                                        onChange={handleInputChange} />
                                        <p className='error'>{formErrors.userName}</p>
                                        
                                    </Col>
                                </FormGroup>
                               
                                <FormGroup row>
                                    <Label htmlFor= "feedback" md={12}>
                                        Comment
                                    </Label>
                                    <Col md={12}>
                                    <Input type='textarea' id='message' rows='12' name='message' value={formValues.message} onChange={handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <Button type='submit' value="submit" className='bg-primary'>
                                    Submit
                                </Button>
                            </Form> */}
                            {/* <LocalForm onSubmit={(values) => handleSubmit(values)}>
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
                    </Modal>     */}
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
