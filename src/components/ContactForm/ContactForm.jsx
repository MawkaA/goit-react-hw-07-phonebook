// import { nanoid } from 'nanoid';
import React, { memo, useState } from "react";
import css from './ContactForm.module.css';
import PropTypes from "prop-types";


const ContactForm =(({ onSubmit, isLoading })=> {
  const [state, setState] = useState({
    name: '',
    phone: '',
  });
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(state);

    setState({
      name: '',
      phone: '',
    });
  };
  const handleChange = e => {
    const { name, value } = e.target;

    setState(prevState => ({ ...prevState, [name]: value }));
  };
        return(
            <form className={css.form} action="" onSubmit={handleSubmit}>
            <label className={css.label} htmlFor=""> Name
            <input 
                   className={css.input}
                   value={state.name}
                   type="text"
                   name="name"
                   onChange={handleChange}
                   placeholder="Enter name"
                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                   required>
                   </input>
                   </label>
            <label className={css.label}>Number
            <input className={css.input}
                    type="text"
                    name='phone'
                    value={state.phone}
                    onChange={handleChange}
                   placeholder="Enter phone number"
                   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                   required>
                   </input>
                   </label>
            <button className={css.button} type="submit">Add Contact</button>
        </form>
    )
          
})
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };
  export default memo(ContactForm);
  