import React from 'react'
import { Navbar,Nav,NavDropdown } from 'react-bootstrap'
import './Nav-Bar.css'



const NavBar:React.FC = () => (
    <div>
        <div className="row">
            <div className="col-md-12">
                <Navbar className="nav-bar" variant="dark" expand="lg" sticky="top">
                    <Navbar.Brand className="navbar-brand" href="#home">Brand Name</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about-us">About Us</Nav.Link>
                            <Nav.Link href="/contact-us">Contact Us</Nav.Link>

                            <NavDropdown title="Dropdown" id="basic-nav-dropdown" >
                                <div className = "dropElements">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item><br />
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item><br />
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item><br />
                                </div>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <br />
            </div>
        </div>
    </div>
)

export default NavBar