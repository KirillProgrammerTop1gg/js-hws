import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { fetchContacts, delContact } from "../../redux/contactsApi";
import { selectFoundContacts } from "../../redux/selectors";

const Contacts = styled.ul`
    padding-left: 60px;
    margin-top: 15px;
`;
const Contact = styled.li`
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    &::before{
        content: '';
        display: block;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
const ContactInfo = styled.p``;
const DelBut = styled.button`
    font-size: 16px;
    border-radius: 5px;
    padding: 5px;
    display: block;
`;

export default () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    useEffect(() => {
        dispatch(fetchContacts(token));
    }, []);
    return (
        <Contacts>
            {useSelector(selectFoundContacts).map(contact => <Contact key={contact.id}>
                <ContactInfo>{contact.name}: {contact.number}</ContactInfo>
                <DelBut onClick={(e) => dispatch(delContact([token, contact.id]))}>Delete</DelBut>
            </Contact>)}
        </Contacts>
    );
}