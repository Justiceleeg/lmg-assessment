import React from 'react';
import './AllTeam.css';


//functional component (not class component)
const AllTeam = () => {
    return (
        <div className="all-team restrict">
            <img className="all-team-img" src="https://greenberg.wpengine.com/files/2011/01/Greenberg-Group-2-800x384.jpg" alt="team photo" />
            <div className="all-team-info">
                <h3 className="our-team">Our Team</h3>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}

export default AllTeam;