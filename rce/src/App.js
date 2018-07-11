// Homepage is the parent component.
class Homepage extends React.Component {
  render(){
    return (
      <div>
        <Logo />
        <Login />
      </div>
    );
  }

}

// Component: Logo for the website.
class Logo extends React.Component {
  render() {
    return (
      <h1> RCE </h1>
    );
  }
}

// Login Button.
class Login extends React.Component {
  render(){
    return (
      <button> Log In </button>
    );
  }
}

ReactDOM.render(<Homepage />, document.getElementById('app'));
