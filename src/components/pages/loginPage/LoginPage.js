import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../../redux/auth/authOperations';
import styles from './LoginPage.module.css';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    console.log(email, password);
    return (
      <div className={styles.loginBox}>
        <form onSubmit={this.handleSubmit} className="mt-3" autoComplete="off">
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);
