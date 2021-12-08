import {useStaticQuery, graphql} from "gatsby"

export const useMdxPosts = () => {
    const {allMdx: {nodes} = []} = useStaticQuery(graphql`
        query SitePosts {
            allMdx(filter: {slug: {glob: "posts/**"}}) {
                nodes {
                    id
                    slug
                    excerpt
                    timeToRead
                    frontmatter {
                        title
                        tags
                        banner
                        created
                    }
                }
            }
        }
    `);
    return nodes;
}

export const useMdxPostsForTag = (t) => useMdxPosts().filter(p => p.frontmatter.tags.includes(t))
