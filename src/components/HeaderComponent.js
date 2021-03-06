import React , { useState} from 'react'
import { Navbar,NavbarBrand,Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalBody, ModalHeader, Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {
    const [isNavOpen,ToggleNav] = useState (false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    let username;
    let password;
    let remember;
    
    const toggleNav=() => {
        ToggleNav(!isNavOpen);
    }
    
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    const handleLogin = (event) => {
        toggleModal();
        // alert("Username: " + username.value + " Password: " + password.value
        //     + " Remember: " + remember.checked);
        event.preventDefault();
        // console.log(event)
    }
    
    console.log(isNavOpen)
    return (

        <div>
            <Navbar dark expand = "md">
                {/* <div className = "container"> */}
                    <NavbarToggler onClick={toggleNav} />
                    <NavbarBrand className='ml-auto' href = "/"><img src="assets/images/logo.png" alt="Ristorante Con Fusion" height= "30" width = "41" />    
                    </NavbarBrand>
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home"><span className='fa fa-home fa-lg'></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus"><span className='fa fa-info fa-lg'></span> About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu"><span className='fa fa-list fa-lg'></span> Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus"><span className='fa fa-address-card fa-lg'></span> Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <Button outline onClick={toggleModal}>
                                    <span className='fa fa-sign-in fa-lg'></span>Login
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>      
                {/* </div>   */}
            </Navbar>
            <div className="jumbotron">
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiraton from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your senses!</p>
                        </div>
                    </div>
                </div>    
            </div>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleLogin}>
                        <FormGroup>
                            <Label htmlFor = "username">Username</Label>
                            <Input type='text' id='username' name='username' innerRef={(input) => username=input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor = "password">Password</Label>
                            <Input type='password' id='password' name='password' innerRef={(input) => password=input}/>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' name='remember' innerRef={(input) => remember=input}/>
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type='submit' value="submit" className='bg-primary'>
                            Login
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>    
        </div>
    )
}

export default HeaderComponent
