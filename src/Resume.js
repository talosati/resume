import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProgressBar, Container, Row, Col, Table, Button} from 'react-bootstrap';

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
import gurgely from './static/logos/gurgely.png';
import novin from './static/logos/novin.png';

function Resume() {
    return (
        <>
            <div className="experience-header" id="top">
                <Container>
                    <Row>
                        <Col sm={6}>
                            <div id="introduction">
                                <h3>Atanas Tálos</h3>
                                <p>I enjoy working in a team. I find it exciting to see how something is
                                    built from individual parts and how a collaboration can result in an organic whole.
                                    I am motivated and driven by the variety of challenges ahead.</p>
                                <div id="button2">
                                    <Button onClick={() => window.print()} variant="dark">Print resume</Button>
                                </div>
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

            <div className="languages avoidBreak">
                <h1>Language skills</h1>
                <h5>English</h5>
                <ProgressBar variant="info" now={80} label="reading/writing 80%"/>
                <ProgressBar variant="danger" now={65} label="listening/speaking 65%"/>
                <h5>German</h5>
                <ProgressBar variant="info" now={80} label="reading/writing 80%"/>
                <ProgressBar variant="danger" now={50} label="listening/speaking 50%"/>
            </div>

            <div className="programmer-skills avoidBreak">
                <h1>Programmer skills</h1>
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
                                    <li>Styled components</li>
                                </ul>
                                <li>JavaScript ES6</li>
                                <ul>
                                    <li>Axios</li>
                                    <li>Express.js</li>
                                    <li>Jest</li>
                                    <li>Mongoose</li>
                                    <li>NodeJS</li>
                                    <ul>
                                        <li>Babel</li>
                                        <li>npm</li>
                                        <li>yarn</li>
                                    </ul>
                                    <li>ReactJS</li>
                                    <li>Redux</li>
                                    <li>Sequelize</li>
                                </ul>
                                <li>Java 8</li>
                                <ul>
                                    <li>Apache Maven</li>
                                    <li>Hibernate</li>
                                    <li>Gradle Build Tool</li>
                                    <li>JUnit</li>
                                    <li>Log4j2</li>
                                    <li>Project Lombok</li>
                                    <li>Spring</li>
                                    <li>Spring Security</li>
                                    <li>Thymeleaf</li>
                                </ul>
                                <li>TypeScript</li>
                                <ul>
                                    <li>AngularJS</li>
                                </ul>
                            </ul>
                        </Col>
                        <Col sm={12} md={4}>
                            <h4>Tools and Technologies</h4>
                            <ul>
                                <li>AWS</li>
                                <ul>
                                    <li>Amplify</li>
                                    <li>Certificate Manager</li>
                                    <li>CloudFront</li>
                                    <li>Route 53</li>
                                    <li>S3</li>
                                    <li>WorkMail</li>
                                </ul>
                                <li>Contentful</li>
                                <li>Docker</li>
                                <li>ESLint</li>
                                <li>Git</li>
                                <li>Heroku</li>
                                <li>JIRA</li>
                                <li>Liquibase</li>
                                <li>MongoDB</li>
                                <li>MySQL</li>
                                <li>PostgreSQL</li>
                                <li>Open Graph protocol</li>
                                <li>Postman</li>
                                <li>Prettier</li>
                                <li>Swagger</li>
                            </ul>
                        </Col>
                        <Col sm={12} md={4}>
                            <h4>Concepts</h4>
                            <ul>
                                <li>Agile Software Development</li>
                                <li>Clean code</li>
                                <li>MVC</li>
                                <li>REST API</li>
                                <li>SOLID principles</li>
                                <li>Unit Testing, FIRST principles</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="cards avoidBreak">
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

                <div className="experience avoidBreak">
                    <h1>Work experience</h1>
                    <Container>
                        <Row style={{'margin-bottom': '20px'}}>
                            <Col md={3}>
                                <img src={novin} alt="novin"/>
                            </Col>
                            <Col md={9}>
                                <h4><a href="https://novin.hu/" target="_blank">Novin Bt.</a>
                                </h4>
                                <p id="subtitle">2021-, Junior software developer</p>
                                <ul>
                                    <li>Spring, AngularJS, Liquibase, PostgreSQL</li>
                                    <li>contributing to a GitLab project</li>
                                    <li>Agile Software Development:</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row style={{'margin-bottom': '20px'}}>
                            <Col md={3}>
                                <img src={gurgely} alt="gurgely"/>
                            </Col>
                            <Col md={9}>
                                <h4><a href="https://gurgely.com/" target="_blank">Gurgely Design</a>
                                </h4>
                                <p id="subtitle">2020-2021, Junior software developer</p>
                                <ul>
                                    <li>Node.js, React, Sequelize</li>
                                    <li>contributing to a GitHub project</li>
                                    <li>managing tasks using ClickUp</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row style={{'margin-bottom': '20px'}}>
                            <Col md={3}>
                                <img src={varady} alt="varady"/>
                            </Col>
                            <Col md={9}>
                                <h4><a href="http://www.varadyconsulting.hu/" target="_blank">Várady Auditing
                                    Ltd.</a>
                                </h4>
                                <p id="subtitle">2017-2020, Office leader, bookkeeper</p>
                                <ul>
                                    <li>managed cooperation between colleagues</li>
                                    <li>communicated with customers</li>
                                    <li>made balance sheets and submitted tax returns, etc.</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row style={{'margin-bottom': '20px'}}>
                            <Col md={3}>
                                <img src={biokom} alt="biokom"/>
                            </Col>
                            <Col md={9}>
                                <h4><a href="https://www.biokom.hu/" target="_blank">Biokom Non-profit Ltd.</a></h4>
                                <p id="subtitle">2016-2017, Assistant bookkeeper</p>
                                <ul>
                                    <li>collaborated with a with senior bookkeeper on making balance sheets and tax
                                        returns
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <Row style={{'margin-bottom': '20px'}}>
                            <Col md={3}>
                                <img src={corrman} alt="corrman"/>
                            </Col>
                            <Col md={9}>
                                <h4>Corr. Man. Ltd.</h4>
                                <p id="subtitle">2015-2016, Bookkeeper</p>
                                <ul>
                                    <li>made balance sheets, submitted tax returns</li>
                                    <li>communicated with customers</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row style={{'margin-bottom': '20px'}}>
                            <Col md={3}>
                                <img src={darabanth} alt="darabanth"/>
                            </Col>
                            <Col md={9}>
                                <h4><a href="https://www.darabanth.com/en/" target="_blank">Darabanth Ltd.</a></h4>
                                <p id="subtitle">2013-2015, Office administrator</p>
                                <ul>
                                    <li>communicated with customers in Hungarian, German and English</li>
                                    <li>administrated items for auctions</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div className="cards hobbies avoidBreak">
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
                            <h4><a href="http://www.mtsz.org/" target="_blank">Hungarian Hikers' Association</a>
                            </h4>
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
            <div id="button">
                <Button href="#top" variant="dark">To top</Button>
            </div>
        </>
    );
}

export default Resume;
