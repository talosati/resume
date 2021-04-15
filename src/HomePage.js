import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
import {Button, Col, Container, Row} from "react-bootstrap";
import graduate from "./static/graduatecer.jpg";

function HomePage() {
    return (
        <>
            <div className="home-header onlyScreen">
                <h1>Hello, my name is Atanas Tálos, welcome to my resume website!</h1>
                <p>I am a junior full-stack developer, using JavaScript, TypeScript and Java.</p>
            </div>

            <div className="onlyPrintAndMobile">
                <h1 id="onlyPrint">Atanas Tálos</h1>
                <Container>
                    <Row>
                        <Col md={8}>
                            <p>My resume website: <a href="https://atanastalos.com/"
                                                     target="_blank">atanastalos.com</a></p>
                            <p>Linkedin: <a href="https://www.linkedin.com/in/atanastalos/" target="_blank">Atanas
                                Tálos</a></p>
                            <p>Email: <a href="mailto:talos.atanaz@gmail.com">talos.atanaz@gmail.com</a></p>
                            <p>Mobile/WhatsApp: +36309738761</p>
                        </Col>
                        <Col md={4}>
                            <p>Github: <a href="https://github.com/talosati" target="_blank">talosati</a></p>
                            <p>HackerRank: <a href="https://www.hackerrank.com/atanaz" target="_blank">atanaz</a>
                            </p>
                            <p>CodeWars: <a href="https://www.codewars.com/users/talosatanaz"
                                            target="_blank">talosatanaz</a></p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="about onlyPrintAndMobile">
                <p>I am based in Berlin. </p>
                <p>
                    I graduated from the <a href="https://www.greenfoxacademy.com/en/home" target="_blank">Green Fox
                    Academy</a> bootcamp this year as a full-stack developer.
                    The
                    technologies covered were Java (with Spring framework) and JavaScript (Express, React).
                    During
                    this five-month, full-time bootcamp I have proven capable of learning new technologies quickly and
                    independently. During the project phase of the course we worked on a project together, and
                    learned
                    how to
                    work in a team led by a senior mentor. We followed Agile practices and all of our agile meetings
                    were
                    facilitated in English.
                </p>
                <p>
                    Before the course I used HTML and CSS to design my blogs as a hobby, and I also
                    graduated as
                    a graphic designer to extend my knowledge about creating unique and impressive web pages.
                    Before turning towards software engineering, I primarily worked as a certified accountant; I
                    have a
                    degree in accounting and finance. In this phase of my career I worked primarily with businesses,
                    and
                    advanced from an assistant bookkeeper to being a team lead, where I also managed the cooperation
                    between
                    staff members and organized their tasks.
                </p>
                <p>
                    In my role as a bookkeeper, I enjoyed solving problems with great precision, combining
                    theoretical
                    and
                    practical
                    knowledge and using a systematic approach. I appreciated the opportunities for life-long
                    learning
                    and the constant new challenges I met but I wanted a profession where I would be able to use the
                    soft
                    skills I had acquired in a more creative
                    environment. So I decided to take my career in a new direction and become a software engineer.
                </p>
                <p> I am a transgender activist and I used my organizational skills as a co-organizer of the first
                    Transgender Pride march in Hungary.</p>
            </div>

            <div className="onlyScreenWithGivenWidth">
                <Container>
                    <Row>
                        <Col md={6}>
                            <img src={graduate} alt="graduatingceremony"/>
                        </Col>
                        <Col md={6}>
                            <p>I am based in Berlin. </p>
                            <p>
                                I graduated from the <a href="https://www.greenfoxacademy.com/en/home" target="_blank">Green
                                Fox
                                Academy</a> bootcamp this year as a full-stack developer.
                                The
                                technologies covered were Java (with Spring framework) and JavaScript (Express, React).
                                During
                                this 4 months bootcamp I have proven capable of learning new technologies quickly and
                                independently. During the project phase of the course we worked on a project together,
                                and
                                learned
                                how to
                                work in a team led by a senior mentor. We followed Agile practices and all of our agile
                                meetings
                                were
                                facilitated in English.
                            </p>
                            <p>
                                Before the course I used HTML and CSS to design my blogs as a hobby, and I also
                                graduated as
                                a graphic designer to extend my knowledge about creating unique and impressive web
                                pages.
                                Before turning towards software engineering, I primarily worked as a certified
                                accountant; I
                                have a
                                degree in accounting and finance. In this phase of my career I worked primarily with
                                businesses, and
                                advanced from an assistant bookeeper to being a team lead, where I also managed the
                                cooperation
                                between
                                staff members and organized their tasks.
                            </p>
                            <p>
                                In my role as a bookkeeper, I enjoyed solving problems with great precision, combining
                                theoretical
                                and
                                practical
                                knowledge and using a systematic approach. I appreciated the opportunities for life-long
                                learning
                                and the constant new challenges I met but I wanted a profession where I would be able to
                                use
                                the
                                soft
                                skills I had acquired in a more creative
                                environment. So I decided to take my career in a new direction and become a software
                                engineer.
                            </p>
                            <p> I am a transgender activist and I used my organizational skills as a co-organizer of the
                                first
                                Transgender Pride march in Hungary.</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="button">
                <Button href="/resume" variant="dark">See more</Button>
            </div>
        </>
    );
}

export default HomePage;
