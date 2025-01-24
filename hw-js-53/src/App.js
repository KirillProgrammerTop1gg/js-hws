import './App.css';
import styled from 'styled-components';
import AddForm from './Components/AddForm/AddForm';
import FilterInput from './Components/FilterInput/FilterInput';
import ContactList from './Components/ContactList/ContactList';

const Title = styled.h1`
  font-size: 36px;
`;

const SubTitle = styled.h2`
  font-size: 29px;
  margin-top: 20px;
`; 

const App = () => {
  return (<>
    <Title>Phonebook</Title>
    <AddForm/>
    <SubTitle>Contacts</SubTitle>
    <FilterInput/>
    <ContactList/>
  </>);
}

export default App;
