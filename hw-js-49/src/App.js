import './App.css';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddForm from './Components/AddForm/AddForm';
import FilterInput from './Components/FilterInput/FilterInput';
import {nanoid} from 'nanoid';
import ContactList from './Components/ContactList/ContactList';

const Title = styled.h1`
  font-size: 36px;
`;

const SubTitle = styled.h2`
  font-size: 29px;
  margin-top: 20px;
`; 

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');
  const setNameFunc = (val) => setName(val);
  const setNumberFunc = (val) => setNumber(val);
  const addContactFunc = (e) => e.target.checkValidity() ? contacts.find(contact => contact.name.trim().toLowerCase() === name.trim().toLowerCase()) === undefined ? setContacts([
    ...contacts,
    { id: nanoid(), name, number }
  ]) : alert(`${name} is already in contacts.`) : e.target.reportValidity();
  const setFilterFunc = (val) => setFilter(val);
  const delContact = (id) => setContacts(contacts.filter(contact => contact.id !== id))
  return (<>
    <Title>Phonebook</Title>
    <AddForm setName={setNameFunc} setNumber={setNumberFunc} addContact={addContactFunc} />
    <SubTitle>Contacts</SubTitle>
    <FilterInput setFilter={setFilterFunc}/>
    <ContactList delContact={delContact} contacts={filter.trim().toLowerCase() !== '' ? contacts.filter(contact => contact.name.toLowerCase().includes(filter.trim().toLowerCase())) : contacts} />
  </>);
}

export default App;
