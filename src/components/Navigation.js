import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useMdxGearMfr} from "../hooks/useMdxGearMfr";
export default (props) => {

    const gearMfr = useMdxGearMfr();

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Mfr" id="basic-nav-dropdown">
                            {
                                gearMfr.map((mfr) => (
                                    <NavDropdown.Item key={mfr.id} href={'/'+ mfr.slug}>{mfr.frontmatter.title}</NavDropdown.Item>
                                ))
                            }
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>    )
}
