import React from "react";
import {Container, Stack} from "react-bootstrap";

const Footer = () => {
    return (
        <Container fluid={true} className={'bg-light mt-3 p-3'}>
            <Stack gap={5} direction={'horizontal'} className={'justify-content-center'}>
                <p>Footer</p>
                <p>Things</p>
                <p>Here</p>
            </Stack>
        </Container>
    )
};

export default Footer;
