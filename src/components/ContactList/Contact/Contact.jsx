import { useDeleteContactMutation } from '../../../shared/services/contacts';
import Notiflix from 'notiflix';
import { memo } from 'react';

import css from '../ContactList.module.css';


const Contact = ({ id, name, phone }) => {
    const [deleteContact, { isLoading, isSuccess }] = useDeleteContactMutation();
    const onDelete = id => {
      deleteContact(id);
    };
    return (
      <li key={id} className={css.container}>
        {isSuccess && Notiflix.Notify.info(`${name} removed`)}
        <p>
          {name}: <b>{phone}</b>
        </p>
        <button
          disabled={isLoading}
          type="button"
          className={css.button}
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </li>
    );
  };
  
  export default memo(Contact);