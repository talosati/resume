import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, Image, Row, Col, Table} from "react-bootstrap";
import './Experience.css'

import profil from './static/profil.jpg';
import greenfox from './static/logos/greenfoxacademy.png'
import soter from './static/logos/soter-line.jpg'

function Experience() {
    return (
        <>
            <div className="experience-header">
                <Container>
                    <Row>
                        <Col>
                            <Image src={profil} rounded/>
                        </Col>
                        <Col>
                            <p>I like to work in team, see how some exciting,</p>
                            <p>awesome thing is building from small parts.</p>
                            <p>There are always new challanges, they keep my mind fresh,</p>
                            <p>I always can learn something new.</p>
                        </Col>
                    </Row>
                </Container>
                <Table striped bordered hover variant="dark">
                    <tbody>
                    <tr>
                        <td>email</td>
                        <td>mobile</td>
                        <td>GitHub</td>
                        <td>HackerRank</td>
                        <td>CodeWars</td>
                    </tr>
                    <tr>
                        <td>talos.atanaz@gmail.com</td>
                        <td>+36309738761</td>
                        <td>talosati</td>
                        <td>atanaz</td>
                        <td>talosatanaz</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
            <div className="cards">
                <h1>Education</h1>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={greenfox} />
                                <Card.Body>
                                    <Card.Title>Green Fox Academy</Card.Title>
                                    <Card.Text>
                                        <p id="subtitle">2020, Software Engineering</p>
                                        <ul>
                                            <li>Java, Spring, Thymeleaf, Bootstrap</li>
                                            <li>JavaScript, Express, React, Redux, Axios</li>
                                            <li>JSX, HTML, CSS, Sass</li>
                                            <li>MySQL, Sequelize, Docker</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={soter} />
                                <Card.Body>
                                    <Card.Title>Soter-Line</Card.Title>
                                    <Card.Text>
                                        <p id="subtitle">2017-2019, Graphic Designer</p>
                                        <ul>
                                            <li>Adobe Photoshop</li>
                                            <li>Adobe Illustrator</li>
                                            <li>Adobe InDesign</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Experience;
