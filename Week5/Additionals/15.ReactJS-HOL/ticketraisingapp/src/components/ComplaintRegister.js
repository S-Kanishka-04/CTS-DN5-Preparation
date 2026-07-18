import React, { Component } from "react";

class ComplaintRegister extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ename: "",
      complaint: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {

    event.preventDefault();

    const referenceNumber = Math.floor(
      100000 + Math.random() * 900000
    );

    alert(
      "Thanks " +
      this.state.ename +
      "\nYour Complaint was submitted.\nReference ID is: " +
      referenceNumber
    );
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>

        <h2 style={{ color: "red" }}>
          Register your complaints here!!!
        </h2>

        <form onSubmit={this.handleSubmit}>

          <table align="center">

            <tbody>

              <tr>
                <td>Name:</td>
                <td>
                  <input
                    type="text"
                    name="ename"
                    value={this.state.ename}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td>Complaint:</td>
                <td>
                  <textarea
                    name="complaint"
                    rows="4"
                    cols="20"
                    value={this.state.complaint}
                    onChange={this.handleChange}
                  ></textarea>
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

export default ComplaintRegister;