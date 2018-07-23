import React from 'react'; // Needed for react
import { BrowserRouter, Route, Switch, Link, NavLink, withRouter } from 'react-router-dom';

import Logo from './Logo.js';
import Login from './Login.js';
import ResearchAreaLink from './ResearchAreaLink.js';
import Jumbotron from './Jumbotron.js'
import JumbotronAbout from './Pages/AboutPage.js'
import ResearchArea from './Pages/ResearchArea.js'
import LoginPage from './Pages/LoginPage.js'

// Homepage is the parent component.
const Homepage = () => (
  <BrowserRouter>
    <div>
      <Logo />
      <ResearchAreaLink />
      <Login />
      <Switch>
        <Route exact path="/" component={Jumbotron} />
        <Route path="/about" component={JumbotronAbout} />
        <Route path="/research-area" component={ResearchArea} />
        <Route path="/login" component={LoginPage} />
      </Switch>

    </div>
  </BrowserRouter>
);
export default Homepage;
