import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import {Col, Container, Row, Table} from "react-bootstrap";
import graduate from "./static/graduatecer.jpg";

function About() {
    return (
        <>
            <div className="about-header">
                <img src={graduate} alt="graduatingceremony"/>
            </div>

            <div className="about">
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
                        <td><a href="/contact">talos.atanaz@gmail.com</a></td>
                        <td>+36309738761</td>
                        <td><a href="https://github.com/talosati" target="_blank">talosati</a></td>
                        <td><a href="https://www.hackerrank.com/atanaz" target="_blank">atanaz</a></td>
                        <td><a href="https://www.codewars.com/users/talosatanaz" target="_blank">talosatanaz</a></td>
                    </tr>
                    </tbody>
                </Table>

                <div className="onlyPrintAndMobile">
                    <h1 id="onlyPrint">Atanas Tálos</h1>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <p>My resume website: <a href="https://atanastalos.com/"
                                                         target="_blank">atanastalos.com</a></p>
                                <p>Email: <a href="mailto:talos.atanaz@gmail.com">talos.atanaz@gmail.com</a></p>
                                <p>Mobile: +36309738761</p>
                            </Col>
                            <Col md={6}>
                                <p>Github: <a href="https://github.com/talosati" target="_blank">talosati</a></p>
                                <p>HackerRank: <a href="https://www.hackerrank.com/atanaz" target="_blank">atanaz</a>
                                </p>
                                <p>CodeWars: <a href="https://www.codewars.com/users/talosatanaz"
                                                target="_blank">talosatanaz</a></p>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <p>
                    I graduated from the <a href="https://www.greenfoxacademy.com/en/home" target="_blank">Green Fox
                    Academy</a> bootcamp this year as a full-stack developer.
                    The
                    technologies covered were Java (with Spring framework) and JavaScript (Express, React).
                    During
                    this 4 months long bootcamp I have proven capable of learning new technologies quickly and
                    independently. During the project phase of the course we worked on a project together, and learned
                    how to
                    work a team led by a senior mentor. We followed Agile practices, and all of our agile meetings were
                    facilitated in English.
                </p>
                <p>
                    Before the course I used HTML and CSS to design my blogs as a hobby, and I also
                    graduated as
                    a graphic designer to extend my knowledge about creating unique and nice web pages.
                    Before turning towards software engineering, I primarily worked as a certified accountant; I have an
                    accounting and finance degree. In this phase of my career I worked primarily with businesses, and
                    grew from assistant bookeeper into a team lead, where I also managed the cooperation between
                    colleagues and organized subtasks.
                </p>
                <p>
                    As bookkeeper I enjoyed solving problems with precision, combining theoretical and
                    practical
                    knowledge, using a systematic approach. I appreciated the life-long learning
                    and constant new challenges, but I wanted a profession where I can use the acquired soft skills in a
                    more creative
                    environment, so I decided to take my career in a new direction and become a software engineer.
                </p>
                <p> I am a trangender activist and I used my organizational skills as a co-organizer of the first
                    transgender pride demonstration in Hungary.</p>
                <p>I am based in Berlin. </p>
            </div>
        </>
    )
        ;
}

export default About;
