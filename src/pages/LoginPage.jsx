import React from "react";
import axios from 'axios';

class LoginPage extends React.Component {
  state = {
    username: "",
    password: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4000/login', {
        username: this.state.username,
        password: this.state.password
      })
      .then((response) => {
        // console.log(response)
        this.props.history.push('/cities')
        console.log(this.props);
      })
      .catch(function (error) {
        console.log(error);
      });
    
  };

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />
        <br />
        <br />
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <br />
        <br />
        <input 
            type="submit" 
            value="Login" />
      </form>
    );
  }
}

export default LoginPage;
