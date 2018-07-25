import React from 'react';
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";

const LoginPage = () => (
  <div className="container">
    <div className="jumbotron">
        <h2> Log In </h2>
          <form>
            Email:<br />
            <input type="text" name="Email" />
            <br />
            Password:<br />
            <input type="password" name="Password" />
            <br /><br />
            <button type="button" class="btn btn-primary btn-lg">Log In</button>
            <button> Create an Account</button>
            <button> Log in with Facebook </button>
            <button> Log in with Google </button>
            <br />
            <button type="button" class="btn btn-info btn-lg">Log Off</button>
          </form>

    </div>
  </div>
);
export default withRouter(LoginPage);
