import { Contact } from 'components/Contact/Contact';
import { ContactListStyled } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toFilter } from 'utils/filter';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectFilter, selectLoader } from 'redux/selectors';

export const ContactList = () => {
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectLoader);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filtredContacts = toFilter(items, filter);

  return (
    <ContactListStyled>
      {Boolean(items.length) &&
        (filtredContacts.length ? (
          filtredContacts.map(({ id, name, phone }) => (
            <Contact key={id} id={id} name={name} phone={phone} />
          ))
        ) : (
          <p>Contacts not found</p>
        ))}
      {!items.length && !isLoading && <p>Contacts list is empty</p>}
    </ContactListStyled>
  );
};
