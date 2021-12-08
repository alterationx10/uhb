import {useStaticQuery, graphql} from "gatsby"

export const useMdxCategory = () => {

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

export const useMdxNamedCategory = (m) => useMdxCategory().filter(e => e.frontmatter.category === m)
export const useMdxGearForMfr = (m) => useMdxCategory().filter(e => e.frontmatter.category === 'gear' && e.frontmatter.tags.includes(m))
export const useMdxForTag = (m) => useMdxCategory().filter(e => e.frontmatter.tags.includes(m))
