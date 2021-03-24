import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addContactSuccess,
  addContactRequest,
  addContactError,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
  changeFilter,
  fetchContactsSuccess,
  fetchContactsRequest,
  fetchContactsError,
} from './contactsActions';

const itemsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) => {
    return [...state.filter(item => item.id.toString() !== payload.toString())];
  },
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

const loadingReducer = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactsSuccess]: () => true,
  [fetchContactsRequest]: () => false,
  [fetchContactsError]: () => false,
  [changeFilter]: () => true,
});
const errorReducer = createReducer(null, {});

const contactReducers = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default contactReducers;
