import { createSelector } from "@reduxjs/toolkit";
export const selectContacts = (state) => state.contacts.contactsList;
export const selectFilter = (state) => state.filter.status;

export const selectFoundContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    console.log(filter, contacts);
    return filter.trim().toLowerCase() !== '' ? contacts.filter(contact => contact.name.toLowerCase().includes(filter.trim().toLowerCase())) : contacts;
  }
);
