import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ handleChange }) => (
    <label className={ css.label}>
        Find contacts by name
        <input 
         className={ css.input} 
         type="text"
         name='filter'
         onChange={({ target }) => handleChange(target.value)}
         placeholder="Enter name" />
    </label>
);

export default Filter;

Filter.propTypes = {
    handleChange:PropTypes.func.isRequired,
  };