import React from "react";
import {useMdxPosts} from "../../hooks/useMdxPosts";
export default ({tag}) => {

    const posts = useMdxPosts().filter(e => e?.frontmatter?.tags?.includes(tag));

    return(
        <>
            <div>
                {
                    posts.map((node, index) => (
                        <p key={node.id}>
                            Check out this post: {node.frontmatter.title}
                        </p>
                    ))
                }
            </div>
        </>
    )
}
