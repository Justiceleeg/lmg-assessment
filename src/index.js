import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import './index.css';
import Team from './components/Team/Team';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router>
    <div>
        <Navbar />
        <Switch>
            <Route exact path='/' component = { Home } />
            <Route path='/team' component = { Team } />
            <Redirect from="*" to = '/' />
        </Switch> 
        <Footer />
    </div>
</Router>
, document.getElementById('root'));
registerServiceWorker();
