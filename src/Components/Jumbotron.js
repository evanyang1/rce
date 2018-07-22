import React from 'react';

// Middle thing.
export default class Jumbotron extends React.Component {
  render(){
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>CORE</h1>
          <h2>Collaborative Research Environment</h2>
          <p>The CORE is the place where people all over the world collaborate on academic research. The only requirement to participate is an Internet Connection.
            Research papers get peer reviewed just like any other to maintain the rigor of academic research.
          </p>
        </div>
        <a href="#">About</a> <br />
        <a href="#">Contact</a>
      </div>
    );
  }
}
