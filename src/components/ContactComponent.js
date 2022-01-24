import React, { useState, useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './ContactComponent.css'

const ContactComponent = () => {
    
    const initialValues = {
        firstName: '',
        lastName: '',
        telNum: '',
        email: '',
        agree: false,
        message: '',
        contactType: 'Tel.',
        
    };
    
    const [ formValues, setformValues] = useState (initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setformValues({
            ...formValues,
            [name] : value
            
        });
        console.log(formValues)
    }

    const handleSubmit = (event) => {
        console.log('current state is: ', formValues);
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        setformValues(initialValues)
    }

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {};
        const reg = /^\d{10}$/;
        const reg1 =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if (!values?.firstName){
            errors.firstName="First Name is required"
        }
        else if(values.firstName?.length < 3) {
            errors.firstName = "First Name must be between 3 to 8 alphabets!";
        }else if (values.firstName?.length > 10) {
            errors.firstName = "First Name too long!";
        }
        if (!values?.lastName){
            errors.lastName="Last Name is required"
        }
        else if(values.lastName?.length < 3) {
            errors.lastName = "Last Name must be between 3 to 8 alphabets!";
        }else if (values.lastName?.length > 10) {
            errors.lastName = "Last Name too long!";
        }
        if(!values?.email) {
            errors.email = "Email is required!";
        }else if (reg1.test(values?.email)) {
            errors.email = "This is not a valid email format!";
        }
        if(!values?.telNum) {
            errors.telNum = "Tel. number is required!";
        }else if (reg.test(values?.telNum)) {
            errors.telNum = "This is not a valid tel. number!";
        }

        return errors;
    }

    return (
        
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />    
                </div>    
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Send us Your Feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                    <Form onSubmit={handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor= "firstName" md={2}>
                                First Name
                            </Label>
                            <Col md={10}>
                                <Input type='text' id='firstName' name='firstName' 
                                placeholder='First Name' value={formValues.firstName}
                                onChange={handleInputChange} />
                                <p className='error'>{formErrors.firstName}</p>
                                
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor= "lastName" md={2}>
                                Last Name
                            </Label>
                            <Col md={10}>
                                <Input type='text' id='lastName' name='lastName'
                                placeholder='Last Name' value={formValues.lastName}
                                onChange={handleInputChange} />
                                <p className='error'>{formErrors.lastName}</p>
                                
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor= "telNum" md={2}>
                                Contact Tel.
                            </Label>
                            <Col md={10}>
                                <Input type='tel' id='telNum' name='telNum' placeholder='Tel. Number' value={formValues.telNum} 
                                onChange={handleInputChange} />
                                <p className='error'>{formErrors.telNum}</p>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor= "email" md={2}>
                                Email
                            </Label>
                            <Col md={10}>
                                <Input type='email' id='email' name='email' placeholder='Email' 
                                value={formValues.email}
                                onChange={handleInputChange}/>
                                <p className='error'>{formErrors.email}</p>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 6, offset: 2}}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' name='agree' checked={formValues.agree} onChange={handleInputChange} />{' '}<strong>May we contact you?</strong>
                                    </Label>
                                </FormGroup>
                                
                            </Col>
                            <Col md={{size: 3, offset: 1}}>
                                <Input type='select' name='contactType' value={formValues.contactType} onChange={handleInputChange} >
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor= "feedback" md={2}>
                                Your Feedback
                            </Label>
                            <Col md={10}>
                                <Input type='textarea' id='message' rows='12' name='message' value={formValues.message} onChange={handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:10, offset: 2}}>
                                <Button type='submit' color='primary' >
                                    Send Feedback
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent
