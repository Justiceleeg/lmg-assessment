import React from 'react';
import './Team.css';

import TeamTop from './../../media/team-top.jpg';

import AllTeam from './AllTeam/AllTeam';
import IndivTeam from './IndivTeam/IndivTeam';


//functional component (not class component)
const Team = () => {
    return (
        <div >
            <div className="team-header" style={{'background': `url(${TeamTop})`,
                                            'background-position': 'top',
                                            'background-repeat': 'no-repeat',
                                            'background-attachment': 'fixed'
                                            }}>
                <h1 className="team-header restrict">Academic Financial Strategies</h1>
            </div>
            <AllTeam />
            <IndivTeam />
        </div>
    )
}

export default Team;