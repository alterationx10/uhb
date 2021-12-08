import {useStaticQuery, graphql} from "gatsby"

export const useMdxMenu = () => {

    const {allMdx: {nodes} = []} = useStaticQuery(graphql`
        query MdxMenu {
            allMdx(filter: {frontmatter: {category: {ne: null}}}) {
                nodes {
                    id
                    slug
                    frontmatter {
                        title
                        category
                        tags
                        mfr
                    }
                }
            }
        }
    `);
    nodes.sort((a,b) => a.frontmatter.title.localeCompare(b.frontmatter.title));
    return nodes;
}

export const useMdxNamedMenu = (m) => useMdxMenu().filter(e => e.frontmatter.category === m)
export const useMdxGearForMfr = (m) => useMdxMenu().filter(e => e.frontmatter.category === 'gear' && e.frontmatter.tags.includes(m))
