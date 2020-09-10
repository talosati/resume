import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Image, Row, Col, Table} from "react-bootstrap";
import './Experience.css'

import profil from './static/profil.jpg';
import greenfox from './static/logos/greenfoxacademy.png';
import soter from './static/logos/soter-line.jpg';
import penta from './static/logos/pentaunio.jpg';
import milton from './static/logos/miltonfriedman.png';
import eotvos from './static/logos/elte.jpg';

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
                            <div id="introduction">
                                <h3>Atanáz Tálos</h3>
                                <p>I like to work in team, see how some exciting,
                                    awesome thing is building from small parts.
                                    There are always new challanges, they keep my mind fresh,
                                    I always can learn something new.</p>
                            </div>
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
                    <Row style={{'margin-bottom': '20px'}}>
                        <Col md={3}>
                            <img src={greenfox}/>
                        </Col>
                        <Col md={9}>
                            <h4>Green Fox Academy</h4>
                            <p id="subtitle">2020, Software Engineering</p>
                            <ul>
                                <li>Java, Spring, Thymeleaf, Bootstrap</li>
                                <li>JavaScript, Express, React, Redux, Axios</li>
                                <li>JSX, HTML, CSS, Sass</li>
                                <li>MySQL, Sequelize, Docker</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row style={{'margin-bottom': '20px'}}>
                        <Col md={3}>
                            <img src={soter}/>
                        </Col>
                        <Col md={9}>
                            <h4>Soter-Line Education Centrum</h4>
                            <p id="subtitle">2017-2019, Graphic Designer</p>
                            <ul>
                                <li>Adobe Photoshop</li>
                                <li>Adobe Illustrator</li>
                                <li>Adobe InDesign</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row style={{'margin-bottom': '20px'}}>
                        <Col md={3}>
                            <img src={penta}/>
                        </Col>
                        <Col md={9}>
                            <h4>Penta Unió Education Centrum</h4>
                            <p id="subtitle">2015, Chartered certified accountant for business</p>
                        </Col>
                    </Row>
                    <Row style={{'margin-bottom': '20px'}}>
                        <Col md={3}>
                            <img src={milton}/>
                        </Col>
                        <Col md={9}>
                            <h4>Milton Friedman University</h4>
                            <p id="subtitle">2010-2015, Accounting and Finance BA</p>
                        </Col>
                    </Row>
                    <Row style={{'margin-bottom': '20px'}}>
                        <Col md={3}>
                            <img src={eotvos}/>
                        </Col>
                        <Col md={9}>
                            <h4>Eötvös Loránd University</h4>
                            <p id="subtitle">2009-2013, Hungarian Language and Literature BA</p>
                        </Col>
                    </Row>
                </Container>
                <h1>Experience</h1>
                <Container>
                    <Row style={{'margin-bottom': '20px'}}>
                        <Col md={3}>
                            <img src={greenfox}/>
                        </Col>
                        <Col md={9}>
                            <h4>Green Fox Academy</h4>
                            <p id="subtitle">2020, Software Engineering</p>
                            <ul>
                                <li>Java, Spring, Thymeleaf, Bootstrap</li>
                                <li>JavaScript, Express, React, Redux, Axios</li>
                                <li>JSX, HTML, CSS, Sass</li>
                                <li>MySQL, Sequelize, Docker</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
);
}

export default Experience;
