import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import HomePage from "./HomePage";
import Experience from "./Experience";
import About from "./About";

class Home extends Component {

    render() {
        return (
            <Router>
                <main>
                    <Navbar bg="dark" variant="dark">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/experience">Experience</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                    </Navbar>
                    <Switch>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route path="/experience">
                            <Experience/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                    </Switch>
                </main>
            </Router>
        );
    }
}

export default Home;
