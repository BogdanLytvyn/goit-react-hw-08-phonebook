import React from 'react';
import styles from '../pages/phoneBookPage/Phonebook.module.css';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsActions';
import { getFilter } from '../../redux/contacts/contactsSelectors';

const Filter = ({ value, onChangeFilter }) => {
  const onHadleFilter = evt => {
    onChangeFilter(evt.target.value);
  };

  return (
    <div className={styles.group}>
      <input
        autoComplete="off"
        className={styles.input}
        type="text"
        value={value}
        name="name"
        onChange={onHadleFilter}
        required
      />
      <span className={styles.bar}></span>
      <label className={styles.label}>Find contacts by name</label>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filter: getFilter(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onChangeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
