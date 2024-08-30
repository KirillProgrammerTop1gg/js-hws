import styled from "styled-components";
import DelBut from "../EvtButs/DelBut";
import UpdateBut from "../EvtButs/UpdateBut";

const Contacts = styled.ul`
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
    align-items: center;
    gap: 25px;
    &>li{
        display: flex;
        gap: 10px;
        align-items: center;
        border: 2px solid black;
        border-radius: 10px;
        padding: 10px;
    }
`;
const Contact = styled.p`
    font-size: 21px;
`;

export default ({ contacts, delContact, updateContact }) => <>
    <Contacts>
        {contacts.map(contact => <li key={contact.id}>
            <Contact>{contact.name}: {contact.number}</Contact>
            <DelBut delContact={e => delContact(contact.id)} />
            <UpdateBut updateContact={e => updateContact(contact.id)} />
        </li>)}
    </Contacts>
</>