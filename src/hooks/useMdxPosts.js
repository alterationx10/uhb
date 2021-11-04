import {useStaticQuery, graphql} from "gatsby"

export const useMdxPosts = () => {
    const {allMdx: {nodes} = []} = useStaticQuery(graphql`
        query SitePosts {
            allMdx(filter: {slug: {glob: "posts/*"}}) {
                nodes {
                    id
                    slug
                    excerpt
                    timeToRead
                    frontmatter {
                        title
                        tags
                    }
                }
            }
        }
    `);
    return nodes;
}
