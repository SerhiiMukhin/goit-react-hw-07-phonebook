import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { RotatingLines } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <h1 className={css.main_title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.contacts_title}>Contacts</h2>

      {isLoading && !error && (
        <div className={css.spinner}>
          <RotatingLines
            strokeColor="green"
            animationDuration="0.75"
            width="25"
          />
        </div>
      )}

      {error && <b>Ooops, something went wrong...</b>}
      <Filter />
      <ContactList />
    </div>
  );
};
