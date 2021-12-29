import React , { useState} from 'react'
import { Navbar,NavbarBrand,Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {
    const [isNavOpen,ToggleNav] = useState (false)
    
    const toggleNav=() => {
        ToggleNav(!isNavOpen);
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
        </div>
    )
}

export default HeaderComponent
