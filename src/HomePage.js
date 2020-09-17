import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'
import {Button, Col, Container, Row} from "react-bootstrap";

function HomePage() {
    return (
        <>
            <div className="home-header">
                <h1>Hello, my name is Atanas Tálos, welcome to my resume website!</h1>
                <p>I am a junior full-stack developer, using frameworks React, Express.js and Spring.</p>
                <p><Button href="/resume" variant="dark">See more</Button></p>
            </div>
            <div className="other-skills">
                <Container>
                    <Row>
                        <Col>
                            <h4>Languages and Frameworks</h4>
                            <ul>
                                <li>Axios</li>
                                <li>Bootstrap</li>
                                <li>CSS</li>
                                <li>Express.js</li>
                                <li>HTML</li>
                                <li>Sass</li>
                                <li>Java</li>
                                <li>JavaScript</li>
                                <li>ReactJS</li>
                                <li>Redux</li>
                                <li>Spring</li>
                                <li>Thymeleaf</li>
                            </ul>
                        </Col>
                        <Col>
                            <h4>Tools</h4>
                            <ul>
                                <li>AWS S3</li>
                                <li>Docker</li>
                                <li>Git</li>
                                <li>Heroku</li>
                                <li>JIRA</li>
                                <li>Jest</li>
                                <li>MySQL</li>
                                <li>NodeJS</li>
                                <li>Sequelize</li>
                                <li>Swagger</li>
                            </ul>
                        </Col>
                        <Col>
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
