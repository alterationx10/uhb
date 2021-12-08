import React from "react";
import {useMdxNamedCategory} from "../../hooks/useMdxCategory";
import {Container, Table} from "react-bootstrap";

const Index = (props) => {

    const data = useMdxNamedCategory('gear');


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
                                <a href={'/' + g.slug}>
                                    {g.frontmatter.title}
                                </a>
                            </td>
                            <td>
                                <a href={'/' + g.slug.split("/").splice(0,2).join("/")}>
                                    {g.frontmatter.mfr}
                                </a>
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
