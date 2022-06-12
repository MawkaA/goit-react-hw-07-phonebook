import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import Contact from './Contact/Contact';

const ContactList = ({ contacts }) => {
  const elements = contacts.map(({ name, phone, id }) => (
    <Contact name={name} phone={phone} id={id} key={id} />
  ));

  return (
    <>
     {contacts.length === 0 
     ? (<p className={css.message}>No matches found</p>) 
     :(<ul className={css.contactList }>{elements}</ul>)}
    
    </>
    
  );
};

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;