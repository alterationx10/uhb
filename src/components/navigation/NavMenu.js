import React from "react";
import {useMdxNamedMenu} from "../../hooks/useMdxMenu";
import {NavDropdown} from "react-bootstrap";

export default ({menu, title, subtitle}) => {

    const data = useMdxNamedMenu(menu);

    const maybeHeader = () => {
        if (subtitle) {
            return (
                <>
                    <NavDropdown.ItemText>Gear by Mfr</NavDropdown.ItemText>
                    <NavDropdown.Divider/>
                </>
            )
        } else {
            return (<></>)
        }
    }
    return (
        <NavDropdown title={title} id="basic-nav-dropdown">
            {
                maybeHeader()
            }
            {
                data.map((p) => (
                    <NavDropdown.Item key={p.id} href={'/' + p.slug}>{p.frontmatter.title}</NavDropdown.Item>
                ))
            }
        </NavDropdown>
    )

}
