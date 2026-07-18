import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  validateForm = () => {

    const { name, email, password } = this.state;

    if (name.length < 5) {
      alert("Full Name must be 5 characters long!");
      return false;
    }

    if (!(email.includes("@") && email.includes("."))) {
      alert("Email is not valid!");
      return false;
    }

    if (password.length < 8) {
      alert("Password must be 8 characters long!");
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.validateForm()) {
      alert("Valid Form");
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>

        <h1 style={{ color: "red" }}>Register Here!!!</h1>

        <form onSubmit={this.handleSubmit}>

          <table align="center">

            <tbody>

              <tr>
                <td>Name:</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td>Email:</td>
                <td>
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td>Password:</td>
                <td>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td></td>
                <td>
                  <button type="submit">
                    Submit
                  </button>
                </td>
              </tr>

            </tbody>

          </table>

        </form>

      </div>
    );
  }
}

export default Register;