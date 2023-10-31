import { useDispatch, useSelector } from 'react-redux';
import { ContactItem, ContactBox } from './Contact.styled';
import { deleteContact } from 'redux/operations';
import { selectLoader } from 'redux/selectors';
import { useRef } from 'react';

export const Contact = ({ id, name, phone }) => {
  const isLoading = useSelector(selectLoader);
  const dispatch = useDispatch();
  const ref = useRef();

  const handleDelete = evt => {
    ref.current = evt.target.id;
    dispatch(deleteContact(evt.target.id));
  };

  return (
    <ContactItem>
      <ContactBox>
        {name}: {phone}
      </ContactBox>
      <button
        id={id}
        type="button"
        onClick={handleDelete}
        disabled={isLoading && ref.current === id}
      >
        Delete
      </button>
    </ContactItem>
  );
};
