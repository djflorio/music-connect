import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser, updateRegisterErrors } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.updateFormState = this.updateFormState.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillUnmount() {
    this.props.updateRegisterErrors({});
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  updateFormState(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const errors = this.props.errors;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create your MusicConnect account
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  name="email"
                  value={this.state.name}
                  placeholder="Name"
                  onChange={this.updateFormState}
                  error={errors.name}
                />
                <TextFieldGroup
                  name="email"
                  type="email"
                  value={this.state.email}
                  placeholder="Email Address"
                  onChange={this.updateFormState}
                  error={errors.email}
                  info="Your Gravatar image will be used in your profile if it exists."
                />
                <TextFieldGroup
                  name="password"
                  type="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.updateFormState}
                  error={errors.password}
                />
                <TextFieldGroup
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  placeholder="Confirm Password"
                  onChange={this.updateFormState}
                  error={errors.password2}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors.register
});

export default connect(
  mapStateToProps,
  { registerUser, updateRegisterErrors }
)(withRouter(Register));
