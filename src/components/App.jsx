import React,{useRef, useState } from 'react';
// import LoadingIndicator from 'react-loading-indicator';
import Loader from './Loader/Loader';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Notiflix from 'notiflix';
import Filter from './Filter/Filter';
import'./App.css';


import {getFilteredContacts} from '../shared/services/get-contacts';
import {
  useGetContactsQuery,
  useCreateContactMutation,
} from '../shared/services/contacts';

export default function App() {
  const [filter, setFilter] = useState('');
  const isPrevSuccess = useRef(false);

  const { data, error, isLoading } = useGetContactsQuery();

  const [createContact, { isLoading: isFetching, isSuccess }] =
    useCreateContactMutation();

  const addContact = ({ name, phone }) => {
    const duplicate = data.find(item => item.name === name);

    if (duplicate) {
      Notiflix.Notify.info(`${name} already exists in your contacts!`);
      return;
    }

    createContact({ name, phone });
  };
  const filteredContacts = getFilteredContacts(filter, data);

  const showContacts = data && !isLoading & !error;
  const showToast = () => {
    isPrevSuccess.current = true;
    return Notiflix.Notify.success('Contact added to your phonebook!');
  };
return(
        <>
          <h1 className="title">Phonebook</h1>
          <ContactForm 
             className="contact" 
             onSubmit={addContact}
             data={data}
             isLoading={isFetching}
             isSuccess={isSuccess} />
          <h2 className="title">Contacts</h2>
          <Filter handleChange={setFilter}/>
          {isSuccess && !isPrevSuccess.current && showToast()}
          {isLoading && Loader}
          {showContacts && <ContactList contacts={filteredContacts} />}
          </>
    );   
  
};
