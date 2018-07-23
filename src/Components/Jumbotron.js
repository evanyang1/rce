import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink  } from "react-router-dom";

// Middle thing.
const Jumbotron = () => (
  <BrowserRouter>
      <div className="container">
        <div className="jumbotron">
          <h1>CORE</h1>
          <h2>Collaborative Research Environment</h2>
          <p>The CORE is the place where people all over the world collaborate on academic research. The only requirement to participate is an Internet Connection.
            Research papers get peer reviewed just like any other to maintain the rigor of academic research.
          </p>
        </div>
        <Link to="./about">About</Link> <br />
        <a href="#">Contact</a>
      </div>
  </BrowserRouter>
);
export default Jumbotron;
