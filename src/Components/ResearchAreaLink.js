import React from 'react'; // Needed for react
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";

// Link to Researh Forum.
const ResearchAreaLink = () => (
  <Link to="/research-area"><button type="button" className="btn btn-primary">Research Area</button></Link>
);
export default withRouter(ResearchAreaLink);
