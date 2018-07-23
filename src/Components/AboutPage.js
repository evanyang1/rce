import React from 'react';
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";

const JumbotronAbout = () => (

    <div className="container">
      <div className="jumbotron">

        <h1> Temp About Page </h1>
        <h3> Soon this page will look like the home page, except displaying the About section.</h3>

      </div>
      <Link to="/about">About</Link> <br />
      <a href="#">Contact</a>
    </div>

);

export default withRouter(JumbotronAbout);
