import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            isMenuOpen: false
        }
    }

    onHamClick(){
        this.setState(Object.assign({},{ isMenuOpen: !this.state.isMenuOpen}))
    }

    render() {
        return (
            <nav className="navbar">
                <div className="HAM" onClick={() => this.onHamClick()}>
                    <i className={"fa HAM-icon "+(!this.state.isMenuOpen ? "fa-bars" : "fa-times")} aria-hidden="true"></i>
                </div>
                <div className={'nav-links align-right slide-in' +(this.state.isMenuOpen ? " active" : "")}>
                    <Link to="/"><div className="navbar-text">Financial Services</div></Link>
                    <Link to="/team"><div className="navbar-text">Our Team</div></Link>
                    <Link to="#"><div className="navbar-text">Market Updates</div></Link>
                    <Link to="#"><div className="navbar-text">Investing Tools</div></Link>
                    <Link to="#"><div className="navbar-text">Contact Us</div></Link> 
                </div>
            </nav>
        )
    }   
    
    
}