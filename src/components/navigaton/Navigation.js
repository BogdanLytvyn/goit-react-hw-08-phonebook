import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuthenticated } from '../../redux/auth/authSelectors';
import style from './Navigation.module.css';

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

const Navigation = ({ isAuthenticated }) => {
  return (
    <div className={style.nav}>
      <nav>
        <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
          <h5>Home</h5>
        </NavLink>

        {isAuthenticated && (
          <NavLink to="/phonebook" exact style={styles.link} activeStyle={styles.activeLink}>
            <h5 className={style.phonebook}>Phonebook</h5>
          </NavLink>
        )}
      </nav>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
