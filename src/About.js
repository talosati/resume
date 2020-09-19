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
                    <h1 id="onlyPrint">Cover letter</h1>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <p>My resume website: <a href="https://atanastalos.com/" target="_blank">atanastalos.com</a></p>
                                <p>Email: <a href="mailto:talos.atanaz@gmail.com">talos.atanaz@gmail.com</a></p>
                                <p>Mobile: +36309738761</p>
                            </Col>
                            <Col md={6}>
                                <p>Github: <a href="https://github.com/talosati" target="_blank">talosati</a></p>
                                <p>HackerRank: <a href="https://www.hackerrank.com/atanaz" target="_blank">atanaz</a></p>
                                <p>CodeWars: <a href="https://www.codewars.com/users/talosatanaz"
                                                target="_blank">talosatanaz</a></p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <p>
                    I graduated from a Hungarian bootcamp called Green Fox Academy this year as a full-stack developer.
                    The
                    technologies the course covered were Java (with Spring framework) and JavaScript (Express, React).
                    During
                    this 4 months long bootcamp I have proven to be capable of learning new technologies quickly and
                    independently. In the project phase of the course we worked on a project together and learned how to
                    work
                    together as a team led by a senior mentor. All of our agile meetings were facilitated in English.
                </p>
                <p>
                    Before the course I used markup and styling languages to design my blogs as a hobby, and I also
                    graduated as
                    a graphic designer to extend my knowledge about creating unique and nice web pages. Before Green Fox
                    Academy
                    I primarily worked as a certified accountant for businesses. I have an accounting and finance
                    degree. In
                    this almost 5 years long period of my career I made balance sheets about business years of
                    companies,
                    submitted tax returns, etc. At first I was an assistant bookkeeper managed by a senior bookkeeper,
                    and later
                    I’ve become a team leader. I managed the cooperation between colleagues and organized subtasks. I
                    also used
                    my organizational skills as a transgener activist as a co-organizer of the first transgender pride
                    demonstration in Hungary.
                </p>
                <p>
                    As bookkeeper I had the opportunity to solve problems with precision, combining theoretical and
                    practical
                    knowledge, using a systematic approach. I liked bookkeeping as a profession with life-long learning
                    and new
                    challenges, but I wanted a profession in which I can use the acquired soft skills in a more creative
                    environment, so I decided to take my career in a new direction and become a software engineer.
                </p>
                <p>From 1st September I'm living in Berlin with my partner who has been relocated by her employer.</p>
            </div>
        </>
    )
        ;
}

export default About;
