import React, { Component } from 'react';
import ContactForm from '../../contactForm/ContactForm';
import Filter from '../../filter/Filter';
import ContactList from '../../contactList/ContactList';
import style from './Phonebook.module.css';
import { connect } from 'react-redux';
import { changeFilter } from '../../../redux/contacts/contactsActions';
import Loader from '../../loader/Loader';
import { getLoading, getContacts, getFilter } from '../../../redux/contacts/contactsSelectors';

class PhoneBookPage extends Component {
  render() {
    const { items, loading } = this.props;
    return (
      <div className={style.phoneBook}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {items.length >= 1 && <Filter />}
        <ContactList />
        {loading && <Loader />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: getContacts(state),
    loading: getLoading(state),
    filter: getFilter(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onChangeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookPage);
