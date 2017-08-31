import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


//functional component (not class component)
const Footer = () => {
    return (
        <div className="footer restrict">
                <div className="footer-element footer-icons">
                    <div className="icon">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </div>
                    <div className="icon">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                    <div className="icon">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </div>
                    <div className="icon">
                        <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="footer-element footer-address">
                    <p className="footer-main-address">Academic Financial Strategies</p>
                    <p>4511 North Campbell Ave. Suite 255</p>
                    <p>Tucson, Arizona 85718</p>
                    <br />  
                    <p className="footer-main-phone">Telephone: (123)456-7891</p>
                    <p>Fax: (123)456-7891</p>
                </div>
                <div className="footer-element footer-resources">
                    <p className="footer-main-address">Resources</p>
                    <ul className="footer-resource-list">
                        <li className="footer-resource-item">Retirement</li>
                        <li className="footer-resource-item">Investment</li>
                        <li className="footer-resource-item">Estate</li>
                        <li className="footer-resource-item">Insurance</li>
                        <li className="footer-resource-item">Tax</li>
                        <li className="footer-resource-item">Money</li>
                        <li className="footer-resource-item">Lifestyle</li>
                    </ul>
                </div>
        </div>
    )
}

export default Footer;