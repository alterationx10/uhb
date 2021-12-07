import React from "react";
import {useMdxNamedMenu} from "../../hooks/useMdxMenu";
import {Container, Table} from "react-bootstrap";
import {Link} from "gatsby";

const Index = (props) => {

    const data = useMdxNamedMenu('gear');


    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Gear</th>
                    <th>Manufacturer</th>
                    <th>Tags</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((g) => (
                        <tr key={g.id}>
                            <td>
                                <Link to={'/' + g.slug}>
                                    {g.frontmatter.title}
                                </Link>
                            </td>
                            <td>

                            </td>
                            <td>
                                {
                                    g.frontmatter.tags.map((t, i) => (
                                        <span key={i}> #{t} </span>
                                    ))
                                }
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </Container>
    )
}
export default Index;
