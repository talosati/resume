import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'
import {Button, Card, Col, Container, Row} from "react-bootstrap";

import screenshot from './static/resume_website.png';

function HomePage() {
    return (
        <>
            <div className="home-header">
                <h1>Hello, my name is Atanas Tálos, welcome to my resume website!</h1>
                <p>I am a junior full-stack developer, using frameworks React, Express.js and Spring.</p>
                <p><Button href="/resume" variant="dark">See more</Button></p>
            </div>

            <div className="projects">
                <Container>
                    <Row style={{'margin': '50px 0px'}}>
                        <Col md={4} sm={12}>
                            <Card>
                                <Card.Img variant="top" src={screenshot}/>
                                <Card.Body>
                                    <Card.Title>Resume in React</Card.Title>
                                    <Card.Text>
                                        My personal page built in React.
                                    </Card.Text>
                                    <Button href="https://github.com/talosati/resume/" target="_blank" variant="dark">Source code</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="other-skills">
                <Container>
                    <Row>
                        <Col sm={12} md={4}>
                            <h4>Languages and Frameworks</h4>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <ul>
                                    <li>Bootstrap</li>
                                    <li>Sass</li>
                                </ul>
                                <li>JavaScript</li>
                                <ul>
                                    <li>Axios</li>
                                    <li>Express.js</li>
                                    <li>Jest</li>
                                    <li>ReactJS</li>
                                    <li>Redux</li>
                                    <li>Sequelize</li>
                                </ul>
                                <li>Java</li>
                                <ul>
                                    <li>Spring</li>
                                    <li>Thymeleaf</li>
                                </ul>
                            </ul>
                        </Col>
                        <Col sm={12} md={4}>
                            <h4>Tools</h4>
                            <ul>
                                <li>AWS</li>
                                <ul>
                                    <li>S3</li>
                                    <li>Route 53</li>
                                    <li>CloudFront</li>
                                    <li>Certificate Manager</li>
                                </ul>
                                <li>Docker</li>
                                <li>ESLint</li>
                                <li>Git</li>
                                <li>Heroku</li>
                                <li>JIRA</li>
                                <li>MySQL</li>
                                <li>NodeJS</li>
                                <ul>
                                    <li>Babel</li>
                                    <li>npm</li>
                                    <li>yarn</li>
                                </ul>
                                <li>Prettier</li>
                                <li>Swagger</li>
                            </ul>
                        </Col>
                        <Col sm={12} md={4}>
                            <h4>Concepts</h4>
                            <ul>
                                <li>MVC</li>
                                <li>REST API</li>
                                <li>SOLID principles</li>
                                <li>Unit Testing</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default HomePage;
