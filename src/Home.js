import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import HomePage from "./HomePage";

class Home extends Component {

    render() {
        return (
            <Router>
                <main>
                    <nav>
                        <Link to="/">Home Page</Link>
                        <Link to="/experience">Experience</Link>
                        <Link to="/about">About</Link>
                    </nav>
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
