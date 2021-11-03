import React from "react";
import "./styles.scss"
import Navigation from "./Navigation";
import {MDXProvider} from "@mdx-js/react"
import Meta from "./Meta";
import PostList from "./posts/PostList";

export default (props) => {
    const shortcodes = {
        PostList,
        p: props => <p {...props} style={{ color: "blue" }} />
    }
    const frontmatter = {...props?.pageContext?.frontmatter}
    return (
        <MDXProvider
        components = {shortcodes}>
            <main className={"d-flex flex-column min-vh-100"}>
                <Meta frontmatter={frontmatter}/>
                <Navigation/>
                <div>
                    {props.children}
                </div>
            </main>
        </MDXProvider>
    )
}
