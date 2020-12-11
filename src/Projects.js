import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';

import lfd from './static/lfd-website.png';
import signUp from './static/signUp.png';
import petshelter from './static/petshelter-website.png';
import resume from './static/resume_website.png';

function Projects() {
    return (
        <>
            <div className="projects">
                <Container>
                    <Row style={{'margin': '50px 0px'}}>
                        <Col md={4} sm={12}>
                            <Card>
                                <Card.Img variant="top" src={lfd}/>
                                <Card.Body>
                                    <Card.Title><a href="https://www.lightningfastdelivery.net/" target="_blank">Lightning Fast Delivery</a></Card.Title>
                                    <Card.Text>
                                        Website for Lightning Fast Delivery workshop, event tickets handled with Ti.To. Created in React.
                                    </Card.Text>
                                    <Button href="https://github.com/atanastalos/lightning-fast-delivery" target="_blank" variant="dark">Source code</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4} sm={12}>
                            <Card>
                                <Card.Img variant="top" src={signUp}/>
                                <Card.Body>
                                    <Card.Title><a href="https://main.d2xuceryh597ov.amplifyapp.com/" target="_blank">Sign up</a></Card.Title>
                                    <Card.Text>
                                        React project with Styled Components and Redux. Deployed with AWS Amplify.
                                    </Card.Text>
                                    <Button href="https://github.com/atanastalos/styledComponentsWithRedux" target="_blank" variant="dark">Source code</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4} sm={12}>
                            <Card>
                                <Card.Img variant="top" src={petshelter}/>
                                <Card.Body>
                                    <Card.Title><a href="https://petshelter-spring.herokuapp.com/" target="_blank">Pet Shelter</a></Card.Title>
                                    <Card.Text>
                                        Java project with Thymeleaf, deployed to Heroku and connected to SQL database called ClearDB.
                                    </Card.Text>
                                    <Button href="https://github.com/talosati/petshelter" target="_blank" variant="dark">Source code</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4} sm={12}>
                            <Card>
                                <Card.Img variant="top" src={resume}/>
                                <Card.Body>
                                    <Card.Title><a href="https://atanastalos.com/" target="_blank">Resume in React</a></Card.Title>
                                    <Card.Text>
                                        My personal page built in React, deployed to AWS S3.
                                    </Card.Text>
                                    <Button href="https://github.com/talosati/resume/" target="_blank" variant="dark">Source code</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Projects;
