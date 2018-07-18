import React from 'react'; // Needed for react

// Homepage is the parent component.
export default class Homepage extends React.Component {
  render(){
    return (
      <div>
        <Logo />
        <Login />
      </div>
    );
  }

}
