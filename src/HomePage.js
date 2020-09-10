import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'

import {Button, Jumbotron} from "react-bootstrap";

function HomePage() {
    return (
        <Jumbotron>
            <h1>Hello, my name is Atanáz Tálos, welcome to my resume website!</h1>
            <p>I am a junior full-stack developer, using frameworks React, Express and Spring.</p>
            <p>
                <Button href="/resume" variant="dark">See more</Button>
            </p>
        </Jumbotron>
    );
}

export default HomePage;
