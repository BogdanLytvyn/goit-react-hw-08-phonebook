import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../navigaton/Navigation';
import UserMenu from '../userMenu/UserMenu';
import AuthNav from '../navigaton/AuthNavigation';
import { getIsAuthenticated } from '../../redux/auth/authSelectors';
import styles from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
