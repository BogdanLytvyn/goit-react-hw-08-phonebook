import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../pages/phoneBookPage/Phonebook.module.css';
import { connect } from 'react-redux';
import { addContact, fetchContacts } from '../../redux/contacts/contactsOperation';
import { getContacts } from '../../redux/contacts/contactsSelectors';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  componentDidMount() {
    this.props.fetchContacts();
  }

  handleNameChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleNumberChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.name || !this.state.number) return;

    this.props.onAddContact({ ...this.state });

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={styles.group}>
          <input
            autoComplete="off"
            className={styles.input}
            type="text"
            value={name}
            name="name"
            onChange={this.handleNameChange}
            required
          />
          <span className={styles.bar}></span>
          <label className={styles.label}>Name</label>
        </div>
        <div className={styles.group}>
          <input
            autoComplete="off"
            className={styles.input}
            type="tel"
            value={number}
            name="number"
            onChange={this.handleNumberChange}
            required
          />
          <span className={styles.bar}></span>
          <label className={styles.label}>Number:</label>
        </div>
        <hr />
        <button className={styles.buttonSubmit} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    items: getContacts(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onAddContact: contact => dispatch(addContact(contact)),
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
