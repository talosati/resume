import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProgressBar, Container, Row, Col, Table, Button} from 'react-bootstrap';
import './Resume.css'

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
import mensa from './static/logos/mensa_logo.png';
import tura from './static/logos/mtsz.jpg';
import feather from './static/logos/feather.jpg';

function Resume() {
    return (
        <>
            <div className="experience-header" id="top">
                <Container>
                    <Row>
                        <Col sm={6}>
                            <div id="introduction">
                                <h3>Atanas Tálos</h3>
                                <p>I enjoy working in a team, and I find it exciting how something is
                                    composed out of individual parts, the result of joint work.
                                    I like the variety of the challenges, they motivate and drive me.</p>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <img src={profil}/>
                        </Col>
                    </Row>
                </Container>
                <Table striped bordered hover variant="dark">
                    <tbody>
                    <tr>
                        <td>Email</td>
                        <td>Mobile/WhatsApp</td>
                        <td>Linkedin</td>
                        <td>GitHub</td>
                        <td>HackerRank</td>
                        <td>CodeWars</td>
                    </tr>
                    <tr>
                        <td><a href="/contact">talos.atanaz@gmail.com</a></td>
                        <td>+36309738761</td>
                        <td><a href="https://www.linkedin.com/in/atanastalos/" target="_blank">Atanas Tálos</a></td>
                        <td><a href="https://github.com/talosati" target="_blank">talosati</a></td>
                        <td><a href="https://www.hackerrank.com/atanaz" target="_blank">atanaz</a></td>
                        <td><a href="https://www.codewars.com/users/talosatanaz" target="_blank">talosatanaz</a></td>
                    </tr>
                    </tbody>
                </Table>
            </div>
            <div className="onlyPrintAndMobileView">
                <Container>
                    <Row>
                        <Col md={6}>
                            <p>My resume website: <a href="https://atanastalos.com/" target="_blank">atanastalos.com</a>
                            </p>
                            <p>Linkedin: <a href="https://www.linkedin.com/in/atanastalos/" target="_blank">Atanas
                                Tálos</a></p>
                            <p>Email: <a href="mailto:talos.atanaz@gmail.com">talos.atanaz@gmail.com</a></p>
                            <p>Mobile/WhatsApp: +36309738761</p>
                        </Col>
                        <Col md={6} id="rightColumn">
                            <p>Github: <a href="https://github.com/talosati" target="_blank">talosati</a></p>
                            <p>HackerRank: <a href="https://www.hackerrank.com/atanaz" target="_blank">atanaz</a></p>
                            <p>CodeWars: <a href="https://www.codewars.com/users/talosatanaz"
                                            target="_blank">talosatanaz</a></p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="cards">
                <div className="education">
                    <h1>Education</h1>
                    <Container>
                        <Row style={{'margin-bottom': '20px'}}>
                            <Col md={3}>
                                <img src={greenfox} alt="greenfox"/>
                            </Col>
                            <Col md={9}>
                                <h4><a href="https://www.greenfoxacademy.com/en/home" target="_blank">Green Fox
                                    Academy</a>
                                </h4>
                                <p id="subtitle">2020, Software Engineering</p>
                                <ul>
                                    <li>Java, Spring, Thymeleaf, Bootstrap</li>
                                    <li>JavaScript, Express.js, React, Redux, Axios</li>
                                    <li>JSX, HTML, CSS, Sass</li>
                                    <li>MySQL, Sequelize</li>
                                    <li>Git, Heroku, Docker</li>
                                    <li>AWS S3, Route 53, CloudFront, Certificate Manager</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row style={{'margin-bottom': '20px'}}>
                            <Col md={3}>
                                <img src={soter} alt="soterline"/>
                            </Col>
                            <Col md={9}>
                                <h4><a href="https://www.soterline.hu/" target="_blank">Soter-Line Education Centrum</a>
                                </h4>
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
                                <img src={penta} alt="pentaunio"/>
                            </Col>
                            <Col md={9}>
                                <h4><a href="https://www.penta.hu/" target="_blank">Penta Unió Education Centrum</a>
                                </h4>
                                <p id="subtitle">2015, Chartered certified accountant for business</p>
                            </Col>
                        </Row>
                        <Row style={{'margin-bottom': '20px'}}>
                            <Col md={3}>
                                <img src={milton} alt="miltonfriedman"/>
                            </Col>
                            <Col md={9}>
                                <h4><a href="https://uni-milton.hu/" target="_blank">Milton Friedman University</a></h4>
                                <p id="subtitle">2010-2015, Accounting and Finance BA</p>
                            </Col>
                        </Row>
                        <Row style={{'margin-bottom': '20px'}}>
                            <Col md={3}>
                                <img src={eotvos} alt="eotvos"/>
                            </Col>
                            <Col md={9}>
                                <h4><a href="https://www.elte.hu/en/" target="_blank">Eötvös Loránd University</a></h4>
                                <p id="subtitle">2009-2013, Hungarian Language and Literature BA</p>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="experience">
                    <h1>Experience</h1>
                    <Container>
                        <Row style={{'margin-bottom': '20px'}}>
                            <Col md={3}>
                                <img src={varady} alt="varady"/>
                            </Col>
                            <Col md={9}>
                                <h4><a href="http://www.varadyconsulting.hu/" target="_blank">Várady Könyvvizsgáló
                                    Kft.</a>
                                </h4>
                                <p id="subtitle">2017-2020, Office leader, bookkeeper</p>
                                <ul>
                                    <li>managing the cooperation between collegues, how we can share subtasks</li>
                                    <li>communicating with customers</li>
                                    <li>making balance sheet, submitting tax returns</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row style={{'margin-bottom': '20px'}}>
                            <Col md={3}>
                                <img src={biokom} alt="biokom"/>
                            </Col>
                            <Col md={9}>
                                <h4><a href="https://www.biokom.hu/" target="_blank">Biokom Nonprofit Kft.</a></h4>
                                <p id="subtitle">2016-2017, Assistant bookkeeper</p>
                                <ul>
                                    <li>working with senior bookkeeper, sharing with her subtasks</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row style={{'margin-bottom': '20px'}}>
                            <Col md={3}>
                                <img src={corrman} alt="corrman"/>
                            </Col>
                            <Col md={9}>
                                <h4>Corr. Man. Kft.</h4>
                                <p id="subtitle">2015-2016, Bookkeeper</p>
                                <ul>
                                    <li>making balance sheets, submitting tax returns</li>
                                    <li>communicating with customers</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row style={{'margin-bottom': '20px'}}>
                            <Col md={3}>
                                <img src={darabanth} alt="darabanth"/>
                            </Col>
                            <Col md={9}>
                                <h4><a href="https://www.darabanth.com/en/" target="_blank">Darabanth Kft.</a></h4>
                                <p id="subtitle">2013-2015, Office administrator</p>
                                <ul>
                                    <li>communicating with customers in Hungarian, German and English</li>
                                    <li>administrating items for auctions</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div className="languages">
                <h1>Language skills</h1>
                <h5>English</h5>
                <p id="subtitle">Intermediate combined language examination in economics and management</p>
                <ProgressBar variant="success" now={70} label="writing"/>
                <ProgressBar variant="info" now={90} label="reading"/>
                <ProgressBar variant="warning" now={70} label="listening"/>
                <ProgressBar variant="danger" now={60} label="speaking"/>
                <h5>German</h5>
                <p id="subtitle">Intermediate combined language examination</p>
                <ProgressBar variant="success" now={90} label="writing"/>
                <ProgressBar variant="info" now={90} label="reading"/>
                <ProgressBar variant="warning" now={50} label="listening"/>
                <ProgressBar variant="danger" now={70} label="speaking"/>
            </div>

            <div className="cards hobbies">
                <h1>Hobbies</h1>
                <Container>
                    <Row style={{'margin-bottom': '20px'}}>
                        <Col md={3}>
                            <img src={mensa} alt="mensa"/>
                        </Col>
                        <Col md={9}>
                            <h4><a href="https://mensa.hu/" target="_blank">Mensa HungarIQa</a></h4>
                            <p id="subtitle">2019-, member</p>
                            <p>Association organizing presentations, dinner parties and trips for its members.
                                Membership requires an IQ above 130.</p>
                        </Col>
                    </Row>
                    <Row style={{'margin-bottom': '20px'}}>
                        <Col md={3}>
                            <img src={tura} alt="mtsz"/>
                        </Col>
                        <Col md={9}>
                            <h4><a href="http://www.mtsz.org/" target="_blank">Hungarian Hikers' Association</a></h4>
                            <p id="subtitle">2016, Map reading & Navigation Course</p>
                        </Col>
                    </Row>
                    <Row style={{'margin-bottom': '20px'}}>
                        <Col md={3}>
                            <img src={feather} alt="quill-pen"/>
                        </Col>
                        <Col md={9}>
                            <h4>Literature</h4>
                            <p>Writing poems and short stories.</p>
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

export default Resume;
