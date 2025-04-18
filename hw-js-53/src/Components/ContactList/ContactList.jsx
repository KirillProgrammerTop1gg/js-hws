import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts, delContact } from "../../redux/contactsApi";
import { selectFoundContacts } from "../../redux/selectors";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 24px 16px;
  display: grid;
  gap: 12px;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Info = styled.span`
  font-size: 1rem;
  color: #333;
`;

const DeleteButton = styled.button`
  padding: 6px 10px;
  background-color: #e57373;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ef5350;
  }
`;

export default () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const contacts = useSelector(selectFoundContacts);

  useEffect(() => {
    dispatch(fetchContacts(token));
  }, [dispatch, token]);

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Info>{name}: {number}</Info>
          <DeleteButton onClick={() => dispatch(delContact([token, id]))}>
            Delete
          </DeleteButton>
        </Item>
      ))}
    </List>
  );
};