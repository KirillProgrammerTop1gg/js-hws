import './App.css';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import ContactForm from './Components/ContanctForm/ContactForm';
import Filter from './Components/Filter/Filter';
import ContactList from './Components/ContactList/ContactList';
import UpdateForm from './Components/UpdateForm/UpdateForm';

const Section = styled.section`
    padding: 15px;
    max-width: 1280px;
    margin: 0 auto;
`;
const Title = styled.h1`
    font-size: 42px;
    text-align: left;
`;
const SubTitle = styled.h2`
    font-size: 32px;
    text-align: left;
`;

export default class App extends Component {
    state = {
        contacts: [],
        filter: '',
        name: '',
        number: '',
        showUpdate: false,
        id: '',
    }
    componentDidMount(){
        this.setState({ contacts: localStorage.getItem('contacts') !== null && JSON.parse(localStorage.getItem('contacts')).length !== 0 ? JSON.parse(localStorage.getItem('contacts')) : [
            {id: 'id-1', name: 'Rosie Simpson', number: '+14591256'},
            {id: 'id-2', name: 'Hermione Kline', number: '+14438912'},
            {id: 'id-3', name: 'Eden Clements', number: '+16451779'},
            {id: 'id-4', name: 'Annie Copeland', number: '+12279126'},
        ] });
    }
    componentDidUpdate(){
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
    render(){
        return <>
            <div className='App'>
                <Section>
                    <Title>Phonebook</Title>
                    <ContactForm setName={() => this.setState(prevState => ({
                        contacts: prevState.contacts,
                        filter: prevState.filter,
                        name: document.querySelector('input[name="name"]').value,
                        number: prevState.number,
                        showUpdate: prevState.showUpdate,
                        id: prevState.id,
                    }))} setNumber={() => this.setState(prevState => ({
                        contacts: prevState.contacts,
                        filter: prevState.filter,
                        name: prevState.name,
                        number: document.querySelector('input[name="number"]').value,
                        showUpdate: prevState.showUpdate,
                        id: prevState.id,
                    }))} addContact={() => (document.querySelector('input[name="name"]').value = '', document.querySelector('input[name="number"]').value = '', this.state.contacts.find(contact => contact.name.toLowerCase() === this.state.name.toLowerCase()) === undefined ? this.setState(prevState => ({
                        contacts: [
                            ...prevState.contacts,
                            {                                
                                name: prevState.name,
                                number: prevState.number,
                                id: nanoid(),
                            },
                        ],
                        filter: prevState.filter,
                        name: '',
                        number: '',
                        showUpdate: prevState.showUpdate,
                        id: prevState.id,
                    })) : alert(`${this.state.name} is already in contacts.`))}>
                        <SubTitle>Add contact</SubTitle>
                    </ContactForm>
                    {this.state.showUpdate && <UpdateForm updateContact={() => this.setState(prevState => ({
                        contacts: this.state.contacts.map(contact => 
                            contact.id === prevState.id ? {
                                name: document.querySelector('input[name="nameUpd"]').value !== '' ? document.querySelector('input[name="nameUpd"]').value : contact.name,
                                number: document.querySelector('input[name="numberUpd"]').value !== '' ? document.querySelector('input[name="numberUpd"]').value : contact.number,
                                id: prevState.id,
                            } : contact
                        ),
                        filter: prevState.filter,
                        name: this.state.name,
                        number: this.state.number,
                        showUpdate: false,
                        id: '',
                    }))} name={this.state.contacts.find(contact => this.state.id === contact.id).name}>
                        <SubTitle>Update contact</SubTitle>    
                    </UpdateForm>}
                    <SubTitle>Contacts</SubTitle>
                    <Filter writeFilter={() => this.setState(prevState => ({
                        contacts: prevState.contacts,
                        filter: document.querySelector('input[name="filter"]').value,
                        name: prevState.name,
                        number: prevState.number,
                        showUpdate: prevState.showUpdate,
                        id: prevState.id,
                    }))} />
                    <ContactList contacts={this.state.filter !== '' ? this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase())) : this.state.contacts} delContact={(id) => this.setState(prevState => ({
                        contacts: prevState.contacts.filter(contact => contact.id !== id),
                        filter: prevState.filter,
                        name: prevState.name,
                        number: prevState.number,
                        showUpdate: prevState.showUpdate,
                        id: prevState.id,
                    }))} updateContact={(id) => this.setState(prevState => ({
                        contacts: prevState.contacts,
                        filter: prevState.filter,
                        name: prevState.name,
                        number: prevState.number,
                        showUpdate: true,
                        id: id,
                    }))} />
                </Section>
            </div>
        </>
    }
}