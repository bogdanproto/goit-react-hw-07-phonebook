import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { PhoneBook } from './App.styled';
import { selectError, selectLoader } from 'redux/selectors';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

export const App = () => {
  const isLoading = useSelector(selectLoader);
  const error = useSelector(selectError);
  return (
    <>
      {isLoading && <Loader />}
      <PhoneBook>
        <h2>Phonebook</h2>
        <ContactForm />
        <h3>Contacts</h3>
        <Filter />
        <ContactList />
        {error && <Error />}
      </PhoneBook>
      <ToastContainer />
    </>
  );
};
