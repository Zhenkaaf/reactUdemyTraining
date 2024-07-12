import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      email: "",
      message: "",
      select: "",
      subscription: false,
      gender: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckboxChange = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  validateName = () => {
    if (this.state.firstName.length < 7) {
      alert("Your first name can't be less than 7 letters");
    }
  };
  validateEmail = () => {
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.state.email
      )
    ) {
      alert("email is not valid");
    }
  };

  render() {
    return (
      <div style={{ marginBottom: "50px" }}>
        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          onBlur={this.validateName}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleChange}
          onBlur={this.validateEmail}
        />
        <textarea
          name="message"
          id=""
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <hr />
        <select
          name="select"
          id=""
          value={this.state.select}
          onChange={this.handleChange}
        >
          <option
            value=""
            disabled
          >
            Выберите значение
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <label htmlFor="">
          <input
            type="checkbox"
            name="subscription"
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          Subscription
        </label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={this.handleChange}
          checked={this.state.gender === "male"}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={this.handleChange}
          checked={this.state.gender === "female"}
        />
        Female
      </div>
    );
  }
}
