import React from 'react';
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";

const LoginPage = () => (
  <div>
    <h2> Log In </h2>
      <form>
        First name:<br />
        <input type="text" name="firstname" />
        <br />
        Last name:<br />
        <input type="text" name="lastname" />
        <br /><br />
        <input type="submit" value="Submit" />
      </form>
  </div>
);
export default withRouter(LoginPage);
