import React from 'react'; // Needed for react
import Logo from './Logo.js';
import Login from './Login.js';
import ResearchAreaLink from './ResearchAreaLink.js';
import Jumbotron from './Jumbotron.js'

// Homepage is the parent component.
export default class Homepage extends React.Component {
  render(){
    return (
      <div>
        <Logo />
        <ResearchAreaLink />
        <Login />
        <Jumbotron />
      </div>
    );
  }

}
