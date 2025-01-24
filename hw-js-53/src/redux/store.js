import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { nanoid } from 'nanoid';

const state = {
    name: "contactBook",
    contacts: [],
    filter: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'addContact':
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    { id: nanoid(), name: action.payload.name, number: action.payload.number}
                ]
            }
        case 'delContact':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case 'setFilter':
            return {
                ...state,
                filter: action.payload
            }
        default:
            return state;
    }
}

export default createStore(reducer, state, composeWithDevTools());