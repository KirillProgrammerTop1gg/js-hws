import { useState, useEffect, createContext, useRef } from 'react';
import styled from 'styled-components';
import AddForm from './../AddForm/AddForm';
import FilterInput from './../FilterInput/FilterInput';
import {nanoid} from 'nanoid';
import ContactList from './../ContactList/ContactList';

const Title = styled.h1`
  font-size: 36px;
`;

const SubTitle = styled.h2`
  font-size: 29px;
  margin-top: 20px;
`; 

export const PhoneContext = createContext();

const Phone = () => {
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
  const delContact = (id) => setContacts(contacts.filter(contact => contact.id !== id));

  return (<>
    <PhoneContext.Provider value={{contacts, addContactFunc, delContact, setFilterFunc, setNameFunc, setNumberFunc}}>
    <Title>Phonebook</Title>
    <AddForm />
    <SubTitle>Contacts</SubTitle>
    <FilterInput/>
    <ContactList contacts={filter.trim().toLowerCase() !== '' ? contacts.filter(contact => contact.name.toLowerCase().includes(filter.trim().toLowerCase())) : contacts} />
    </PhoneContext.Provider>
  </>);
}

export default Phone;
