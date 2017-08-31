import React from 'react';
import './Header.css';

import HeaderPic from './../../../media/header-main.jpg';

//functional component (not class component)
const Header = () => {
    return (
        <div className="header-pic" style={{'background': `url(${HeaderPic})`,
                                            'background-size': 'cover',
                                            'background-position': 'top'
                                            }}>
            <div className="header-logo">LOGO &trade;</div>
            <h1 className="header-major">Academic Financial Strategies</h1>
            <p className="header-minor">Securing Your Family's Financial Future</p>
            <div className="header-button">Services</div>   
        </div>
    )
}

export default Header;