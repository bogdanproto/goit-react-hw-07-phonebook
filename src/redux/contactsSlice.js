import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import {
  handleError,
  handleFulfilled,
  handleFulfilledAdd,
  handleFulfilledDelete,
  handlePending,
} from 'reduxFunctions/statusChangers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(fetchContacts.rejected, handleError)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(addContact.rejected, handleError)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addCase(deleteContact.rejected, handleError);
  },
});

export const contactsReducer = contactsSlice.reducer;
