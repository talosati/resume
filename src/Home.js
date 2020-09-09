import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import HomePage from "./HomePage";
import {Nav} from "react-bootstrap";

class Home extends Component {

    render() {
        return (
            <Router>
                <main>
                    <Nav defaultActiveKey="/" as="ul">
                        <Nav.Item as="li">
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/experience">Experience</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Switch>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route path="/experience">
                        </Route>
                        <Route path="/about">
                        </Route>
                    </Switch>
                </main>
            </Router>
        );
    }
}

export default Home;
