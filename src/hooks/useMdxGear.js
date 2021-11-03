import {useStaticQuery, graphql} from "gatsby"

export const useMdxGear = () => {

    const {allMdx: {nodes} = []} = useStaticQuery(graphql`
        query Gear {
            allMdx(filter: {slug: {glob: "gear/*"}, frontmatter: {cat: {eq: "gear"}}}) {
                nodes {
                    id
                    slug
                    frontmatter {
                        title
                    }
                }
            }
        }
    `);
    return nodes;
}
