import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProgressBar, Container, Image, Row, Col, Table, Button} from 'react-bootstrap';
import './Experience.css'

import profil from './static/profil.jpg';
import greenfox from './static/logos/greenfoxacademy.png';
import soter from './static/logos/soter-line.jpg';
import penta from './static/logos/pentaunio.jpg';
import milton from './static/logos/miltonfriedman.png';
import eotvos from './static/logos/elte.jpg';
import varady from './static/logos/varady.png';
import biokom from './static/logos/biokom.png';
import corrman from './static/logos/corrman.png';
import darabanth from './static/logos/darabanth.png';
import mensa from './static/logos/mensa_logo.svg';
import tura from './static/logos/mtsz.jpg';

function Experience() {
    return (
        <>
            <div className="experience-header" id="top">
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
                            <img src={varady}/>
                        </Col>
                        <Col md={9}>
                            <h4>Várady Könyvvizsgáló Kft.</h4>
                            <p id="subtitle">2017-2020, Bookkeeper, office leader</p>
                            <ul>
                                <li>making balance sheet about business years of companies</li>
                                <li>submitting tax returns</li>
                                <li>communicating with customers</li>
                                <li>managing the cooperation between collegues, how we can share subtasks</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row style={{'margin-bottom': '20px'}}>
                        <Col md={3}>
                            <img src={biokom}/>
                        </Col>
                        <Col md={9}>
                            <h4>Biokom Nonprofit Kft.</h4>
                            <p id="subtitle">2016-2017, Assistant bookkeeper</p>
                            <ul>
                                <li>working tiwh senior bookkeeper, sharing with her subtasks</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row style={{'margin-bottom': '20px'}}>
                        <Col md={3}>
                            <img src={corrman}/>
                        </Col>
                        <Col md={9}>
                            <h4>Corr. Man. Kft.</h4>
                            <p id="subtitle">2015-2016, Bookkeeper</p>
                            <ul>
                                <li>making balance sheet about business years of companies</li>
                                <li>submitting tax returns</li>
                                <li>communicating with customers</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row style={{'margin-bottom': '20px'}}>
                        <Col md={3}>
                            <img src={darabanth}/>
                        </Col>
                        <Col md={9}>
                            <h4>Darabanth Kft.</h4>
                            <p id="subtitle">2013-2015, Office administrator</p>
                            <ul>
                                <li>communicating with customers in Hungarian, German and English</li>
                                <li>administrating items for auctions</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="languages">
                <h1>Language skills</h1>
                <h5>English</h5>
                <p id="subtitle">Intermediate combined language examination in economics and management</p>
                <ProgressBar variant="success" now={70} label="writing" />
                <ProgressBar variant="info" now={90} label="reading" />
                <ProgressBar variant="warning" now={70} label="listening" />
                <ProgressBar variant="danger" now={60} label="speaking" />
                <h5>German</h5>
                <p id="subtitle">Intermediate combined language examination</p>
                <ProgressBar variant="success" now={90} label="writing" />
                <ProgressBar variant="info" now={90} label="reading" />
                <ProgressBar variant="warning" now={50} label="listening" />
                <ProgressBar variant="danger" now={70} label="speaking" />
            </div>
            <div className="cards">
                <h1>Hobby</h1>
                <Container>
                    <Row style={{'margin-bottom': '20px'}}>
                        <Col md={3}>
                            <img src={mensa}/>
                        </Col>
                        <Col md={9}>
                            <h4>Mensa HungarIQa</h4>
                            <p id="subtitle">2019-, member</p>
                        </Col>
                    </Row>
                    <Row style={{'margin-bottom': '20px'}}>
                        <Col md={3}>
                            <img src={tura}/>
                        </Col>
                        <Col md={9}>
                            <h4>Hungarian Hikers' Association</h4>
                            <p id="subtitle">2016, Map reading & Navigation Course</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id="bottom">
                <Button href="#top" variant="dark">To top</Button>
            </div>
        </>
    );
}

export default Experience;
