import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import NavMenu from "./NavMenu";

export default () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Ultra Heavy Beat</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavMenu title={'Gear'} menu={'gear'}/>
                        <NavMenu title={'Manufacturer'} menu={'mfr'} subtitle={'Gear by Mfr'}/>
                        <NavMenu title={'Stores'} menu={'stores'}/>
                        <Nav.Link href="/about">About</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>    )
}
