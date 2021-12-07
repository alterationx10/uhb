import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import NavMenu from "./NavMenu";

const Navigation = () => {

    return (
        <Navbar bg="light" expand="lg" className={'mb-3'}>
            <Container>
                <Navbar.Brand href="/">Ultra Heavy Beat</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/gear">Gear</Nav.Link>
                        <NavMenu title={'Stores'} menu={'stores'}/>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>)
};

export default Navigation;
