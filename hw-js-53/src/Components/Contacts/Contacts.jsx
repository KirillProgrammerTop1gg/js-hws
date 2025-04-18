import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authApi";
import AddForm from "../AddForm/AddForm";
import FilterInput from "../FilterInput/FilterInput";
import ContactList from "../ContactList/ContactList";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f5f7fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 8px 8px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  color: #333;
`;

const Cabinet = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const UserName = styled.span`
  font-size: 1rem;
  color: #555;
`;

const LogoutButton = styled.button`
  padding: 8px 12px;
  background-color: #e57373;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s;

  &:hover {
    background-color: #ef5350;
  }
`;

export default () => {
  const email = useSelector((state) => state.auth.email);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/js-hws/hw-js-53/build", { replace: true });
  }, [token]);

  return (
    <>
      <Header>
        <Title>Phonebook</Title>
        <Cabinet>
          <UserName>{email}</UserName>
          <LogoutButton onClick={() => dispatch(logout(token))}>
            Logout
          </LogoutButton>
        </Cabinet>
      </Header>
      <main>
        <AddForm />
        <FilterInput />
        <ContactList />
      </main>
    </>
  );
};