import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { getUsername } from '../../redux/auth/authSelectors';
import defaultAvatar from '../../shared/images/male-user.png';
import styles from './User.module.css';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.container}>
    <img src={avatar} alt="" width="32" className={styles.avatar} />
    <span className={styles.name}>{name}</span>
    <button className="btn btn-danger" type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);
const mapStateToProps = state => ({
  name: getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
