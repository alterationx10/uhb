import {useStaticQuery, graphql} from "gatsby"

export const useMdxStores = () => {

    const {allMdx: {nodes} = []} = useStaticQuery(graphql`
        query Stores {
            allMdx(filter: {slug: {glob: "stores/*"}, frontmatter: {cat: {eq: "store"}}}) {
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
