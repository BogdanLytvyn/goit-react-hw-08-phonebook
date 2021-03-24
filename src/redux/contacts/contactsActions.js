import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contacts/add-Contacts-Request');
export const addContactSuccess = createAction('contacts/add-Contacts-Success');
export const addContactError = createAction('contacts/add-Contacts-Error');

export const deleteContactRequest = createAction('contacts/delete-Contacts-Request');
export const deleteContactSuccess = createAction('contacts/delete-Contacts-Success');
export const deleteContactError = createAction('contacts/delete-Contacts-Error');

export const fetchContactsRequest = createAction('contacts/fetch-Contacts-Request');
export const fetchContactsSuccess = createAction('contacts/fetch-Contacts-Success');
export const fetchContactsError = createAction('contacts/fetch-Contacts-Error');

export const changeFilter = createAction('contacts/filter');
