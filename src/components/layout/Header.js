import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Form, FormControl, NavDropdown, Button, Row, Col } from 'react-bootstrap';
class HeaderComponent extends React.Component {
    render() {
        return (
            <Navbar class="navbar" expand="lg">
            <Navbar.Brand href="#home"><span class="color-change"><b>VOTING</b></span> <span class="color">Management System</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <div className="links">
            <Nav className="mr-auto">
            <Nav.Link href="/dashboard">Candidate</Nav.Link>
              
            </Nav>
            </div>
            <div class="logins">
              <Nav.Link href="#signin">Sign-In</Nav.Link>
              <Nav.Link href="#signin">Sign-Up</Nav.Link>
            </div>
          </Navbar.Collapse>
          <br/>
          </Navbar>

        );
    }

}

export default HeaderComponent;