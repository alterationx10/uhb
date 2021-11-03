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
    return nodes;
}
