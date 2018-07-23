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
            <input type="submit" value="Submit" />
          </form>

    </div>
  </div>
);
export default withRouter(LoginPage);
