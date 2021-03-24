import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from './appBar/AppBar';
import Container from '../components/container/Conrainer';
import { getCurrentUser } from '../redux/auth/authOperations';

import styles from './App.module.css';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Loader from './loader/Loader';

const HomePage = lazy(() =>
  import('./pages/homePage/HomePage' /* webpackChunkName: "home-page" */),
);
const PhoneBookPage = lazy(() =>
  import('./pages/phoneBookPage/PhoneBookPage' /* webpackChunkName: "phonebook-page" */),
);
const RegisterPage = lazy(() =>
  import('./pages/registerPage/RegisterPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('./pages/loginPage/LoginPage' /* webpackChunkName: "login-page" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <div className={styles.appBox}>
        <Container className={styles.appBox}>
          <AppBar />
          <Suspense fallback={<Loader></Loader>}>
            <Switch>
              <PublicRoute exact path="/" component={HomePage} />
              <PublicRoute
                path="/register"
                restricted
                component={RegisterPage}
                redirectTo="/phonebook"
              />
              <PublicRoute path="/login" restricted component={LoginPage} redirectTo="/phonebook" />
              <PrivateRoute path="/phonebook" component={PhoneBookPage} redirectTo="/login" />
            </Switch>
          </Suspense>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
