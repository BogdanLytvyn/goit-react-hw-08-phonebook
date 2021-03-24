import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../../redux/auth/authOperations';
import styles from './RgisterPage.module.css';

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={styles.registerBox}>
        <h1>Please register</h1>
        <form onSubmit={this.handleSubmit} className="mt-3" autoComplete="off">
          <div className="mb-3">
            <label className="form-label">User name</label>
            <input
              type="text"
              placeholder="user name"
              className="form-control"
              id="exampleInputName"
              aria-describedby="emailHelp"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <label className="form-label mt-3">Email address</label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="******"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
