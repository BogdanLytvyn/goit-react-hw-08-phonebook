import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from './appBar/AppBar';
import PhoneBookPage from './pages/phoneBookPage/PhoneBookPage';
import HomePage from './pages/homePage/HomePage';
import RegisterPage from './pages/registerPage/RegisterPage';
import LoginPage from './pages/loginPage/LoginPage';
import Container from '../components/container/Conrainer';
import { getCurrentUser } from '../redux/auth/authOperations';

import styles from './App.module.css';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <div className={styles.appBox}>
        <Container className={styles.appBox}>
          <AppBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/phonebook" component={PhoneBookPage} />
          </Switch>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
