import React, {useEffect} from "react";
import {Card, Stack} from "react-bootstrap";
import {useMdxPosts} from "../hooks/useMdxPosts";
import {Link} from "gatsby";
import { run as runHolder } from 'holderjs/holder';

const Index = (props) => {

    useEffect(() => {
        runHolder('holderjs');
    });

    const posts = useMdxPosts();

    return (
        <Stack gap={5}>
            {
                posts.map(p => (
                    <Card key={p.id}>
                        <Card.Img className={'holderjs'} variant="top" src={`${p.frontmatter.banner}`} />
                        <Card.Body>
                            <Card.Title>{p.frontmatter.title}</Card.Title>
                            <Card.Text>
                                {p.excerpt.replace(p.frontmatter.title, "")}
                            </Card.Text>
                            <Link to={'/' + p.slug} className={'btn btn-primary'}>Read</Link>
                        </Card.Body>
                        <Card.Footer>
                            <Stack gap={5} direction={'horizontal'}>
                                <div>
                                    Tags:
                                    {
                                        p.frontmatter.tags.map((t,i) => (
                                            <span key={i}> #{t} </span>
                                        ))
                                    }
                                </div>
                                <div className={'ms-auto'}>
                                    Time to Read: {p.timeToRead}m
                                </div>
                            </Stack>
                        </Card.Footer>
                    </Card>
                ))
            }
        </Stack>
    )
};
export default Index;
