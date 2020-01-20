import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav, NavItem, NavLink as Link } from 'reactstrap';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            message: "Greetings, Yo!"
        }
    }
    render() {
        return (
            <Router>
            <div className="App">
            <Nav>
                <NavItem>
                <Link href="/home">Home</Link>
                </NavItem>
                <NavItem>
                <Link href="/about">About</Link>
                </NavItem>
                <NavItem>
                <Link href="/contact">Contact</Link>
                </NavItem>
                <NavItem>
                <Link disabled href="#">Disabled Link</Link>
                </NavItem>
            </Nav>
            </div>
            <Switch>
                <Route path="/home">
                    <Home message={ this.state.message } />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
