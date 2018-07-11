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

class Logo extends React.Component {
  render() {
    return (
      <h1> RCE </h1>
    );
  }
}

class Login extends React.Component {
  render(){
    return (
      <button> Log In </button>
    );
  }
}

ReactDOM.render(<Homepage />, document.getElementById('app'));
