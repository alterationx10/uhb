import {useStaticQuery, graphql} from "gatsby"

export const useMdxMenu = () => {

    const {allMdx: {nodes} = []} = useStaticQuery(graphql`
        query MdxMenu {
            allMdx(filter: {frontmatter: {menu: {ne: null}}}) {
                nodes {
                    id
                    slug
                    frontmatter {
                        title
                        menu
                        tags
                    }
                }
            }
        }
    `);
    nodes.sort((a,b) => a.frontmatter.title.localeCompare(b.frontmatter.title));
    return nodes;
}

export const useMdxNamedMenu = (m) => useMdxMenu().filter(e => e.frontmatter.menu === m)
export const useMdxGearForMfr = (m) => useMdxMenu().filter(e => e.frontmatter.menu === 'gear' && e.frontmatter.tags.includes(m))
