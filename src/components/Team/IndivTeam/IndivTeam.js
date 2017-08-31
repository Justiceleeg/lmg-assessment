import React from 'react';
import './IndivTeam.css';

const employeeData = [
    {
        name: 'Chase Greer',
        title: 'President & Founder',
        img: 'http://www.greenbergfinancial.com/files/2014/06/ruben-fernandez-300x240.jpg',
        linkedIn: '#',
        twitter: '#'
    },
    {
        name: 'Samantha Russ',
        title: 'VP of Investment Services',
        img: 'http://www.greenbergfinancial.com/files/2014/06/sue-maxwell-300x240.jpg',
        linkedIn: '#',
        twitter: '#'
    },
    {
        name: 'James Pritchett',
        title: 'VP Compliance / Operations',
        img: 'http://www.greenbergfinancial.com/files/2014/06/ben-fernandez-300x240.jpg',
        linkedIn: '#',
        twitter: '#'
    },
    {
        name: 'Hugh Laurie',
        title: 'Financial Advisor',
        img: 'http://www.greenbergfinancial.com/files/2014/06/david-sherwood-300x240.jpg',
        linkedIn: '#',
        twitter: '#'
    },
    {
        name: 'Christina Williams',
        title: 'Financial Advisor',
        img: 'http://www.greenbergfinancial.com/files/2014/06/natalie-fernandez-300x240.jpg',
        linkedIn: '#',
        twitter: '#'
    },
    {
        name: 'George Washington',
        title: 'Financial Advisor',
        img: 'http://www.greenbergfinancial.com/files/2014/06/dean-greenberg-300x240.jpg',
        linkedIn: '#',
        twitter: '#'
    },
    {
        name: 'Serena Thompson',
        title: 'Financial Advisor',
        img: 'http://www.greenbergfinancial.com/files/2014/06/laurie-metz-300x240.jpg',
        linkedIn: '#',
        twitter: '#'
    },
    {
        name: 'Daphne Rawls',
        title: 'Financial Advisor',
        img: 'http://www.greenbergfinancial.com/files/2014/06/sue-maxwell-300x240.jpg',
        linkedIn: '#',
        twitter: '#'
    },
];

//functional component (not class component)
const IndivTeam = () => {
    const mapImageData = employeeData.map((item => {
        return (
            <div className="indiv-emp">
                <img className="emp-image" src={item.img} alt={item.name} />
                <p className="emp-name">{item.name}</p>
                <p className="emp-title">{item.title}</p>
                <hr />
                <p className='emp-links'><a className="emp-link" href={item.linkedIn}>LinkedIn</a> / <a className="emp-link" href={item.twitter}> Twitter</a></p>
            </div>
        )
    }))

    return (
        <div className="indiv-team restrict">
            {mapImageData}
        </div>
    )
}

export default IndivTeam;