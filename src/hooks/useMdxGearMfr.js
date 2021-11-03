import {useStaticQuery, graphql} from "gatsby"

export const useMdxGearMfr = () => {

    const {allMdx: {nodes} = []} = useStaticQuery(graphql`
        query GearMfr {
            allMdx(filter: {slug: {glob: "gear/*"}, frontmatter: {cat: {eq: "mfr"}}}) {
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
    nodes.sort((a,b) => a.frontmatter.title.localeCompare(b.frontmatter.title));
    return nodes;
}
