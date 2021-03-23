import React, { Component } from 'react';
import Contact from '../contact/Contact';
import { connect } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/contactsSelectors';
import styles from './ContactList.module.css';

class ContactList extends Component {
  render() {
    return (
      <ul className={styles.listContacts}>
        {this.props.contacts.map(item => (
          <li className={styles.contact} key={item.id}>
            <Contact contact={item} />
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: getFilteredContacts(state),
  };
};

export default connect(mapStateToProps)(ContactList);
