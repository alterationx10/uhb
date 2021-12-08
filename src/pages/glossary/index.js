import React from "react";
import {Container} from "react-bootstrap";

const Index = () => {

    const stuff = [
        {
            dt: 'G.A.S',
            dd: 'Gear Acquisition Syndrome'
        },
        {
            dt: 'PPQN',
            dd: 'pulses per quarter note. Important when syncing clocks on modular gear!'
        }
    ];

    stuff.sort((a,b) => a.dt.localeCompare(b.dt));

    return(
        <Container>
            <p>
                Here is an alphabetical of terms that might be handy:
            </p>
            <dl>
                {
                    stuff.map((d) => (
                        <>
                            <dt>{d.dt}</dt><dd>{d.dd}</dd>
                        </>
                    ))
                }
            </dl>
        </Container>
    )
}

export default Index;
