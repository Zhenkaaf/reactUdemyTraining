import React from "react";

export default class Formtwo extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      isAgreeWithTerms: false,
    };
  }

  handleSend = () => {
    if (this.validateEmail() && this.validateisAgreeWithTerms()) {
      alert("Congratulations");
      this.setState({ email: "" });
      this.setState({ isAgreeWithTerms: false });
    }
  };

  handleCheckboxChange = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validateisAgreeWithTerms = () => {
    if (this.state.isAgreeWithTerms === false) {
      alert("You need to accept all terms");
      return false;
    } else {
      return true;
    }
  };
  validateEmail = () => {
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.state.email
      )
    ) {
      alert("email is not valid");
      return false;
    } else {
      return true;
    }
  };

  render() {
    const { email, isAgreeWithTerms } = this.state;
    return (
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="isAgreeWithTerms"
            checked={isAgreeWithTerms}
            onChange={this.handleCheckboxChange}
          />
          I agree with terms and conditions
        </label>
        <br />
        <button onClick={this.handleSend}>Send</button>
      </div>
    );
  }
}
