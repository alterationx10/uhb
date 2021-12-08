import React from "react";
import {useMdxGearForMfr} from "../../hooks/useMdxCategory";
import {Container, Table} from "react-bootstrap";

const GearList = ({mfr}) => {

    const data = useMdxGearForMfr(mfr);

    if (data.length === 0) {
        return (<></>)
    }

    return(
        <Container>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Gear</th>
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

export default GearList;
