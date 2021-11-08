import React from "react";
import "./styles.scss"
import Navigation from "./navigation/Navigation";
import {MDXProvider} from "@mdx-js/react"
import Meta from "./Meta";
import PostList from "./posts/PostList";
import {Container} from "react-bootstrap";
import Footer from "./footer/Footer";

const Layout = (props) => {
    const shortcodes = {
        PostList,
        p: props => <p {...props} />
    }
    const frontmatter = {...props?.pageContext?.frontmatter}
    return (
        <MDXProvider
            components={shortcodes}>
            <main className={"d-flex flex-column min-vh-100"}>
                <Meta {...frontmatter}/>
                <Navigation/>
                <Container className={"col-11 mx-auto flex-grow-1"} fluid={true}>
                    {props.children}
                </Container>
                <Footer/>
            </main>
        </MDXProvider>
    )
};

export default Layout;
