import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const AuthNav = () => (
  <div className="">
    <NavLink to="/register" exact style={styles.link} activeStyle={styles.activeLink}>
      <button className="btn btn-primary me-md-2" type="button">
        Sing Up
      </button>
    </NavLink>
    <NavLink to="/login" exact style={styles.link} activeStyle={styles.activeLink}>
      <button className="btn btn-success " type="button">
        Login
      </button>
    </NavLink>
  </div>
);

export default AuthNav;
