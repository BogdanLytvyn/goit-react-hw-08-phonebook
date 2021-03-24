import axios from 'axios';
import * as actions from './contactsActions';

// axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const addContact = ({ name, number }) => async dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(actions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(actions.addContactSuccess(data));
  } catch (errors) {
    dispatch(actions.addContactError(errors));
  }
};

export const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(actions.fetchContactsSuccess(data));
  } catch (errors) {
    dispatch(actions.fetchContactsError(errors));
  }
};

export const deleteContact = id => async dispatch => {
  const newID = id;
  dispatch(actions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${newID}`);
    dispatch(actions.deleteContactSuccess(newID));
  } catch (errors) {
    dispatch(actions.deleteContactError(errors));
  }
};
