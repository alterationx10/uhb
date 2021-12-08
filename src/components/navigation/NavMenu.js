import React from "react";
import {useMdxNamedCategory} from "../../hooks/useMdxMenu";
import {NavDropdown} from "react-bootstrap";

const NavMenu = ({menu, title, subtitle}) => {

    const data = useMdxNamedCategory(menu);

    const maybeHeader = () => {
        if (subtitle) {
            return (
                <>
                    <NavDropdown.ItemText>{subtitle}</NavDropdown.ItemText>
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

};

export default NavMenu;
