import AddForm from "../AddForm/AddForm";
import FilterInput from "../FilterInput/FilterInput";
import ContactList from "../ContactList/ContactList";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authApi";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Cabinet = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
const UserName = styled.p``;
const But = styled.button`
  background-color: #a1edb5;
  border-radius: 5px;
  padding: 5px;
`;

const Title = styled.h1`
  font-size: 36px;
`;

const SubTitle = styled.h2`
  font-size: 29px;
  margin-top: 20px;
`; 

export default () => {
  const email = useSelector((state) => state.auth.email);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (token == '') navigate('/')
  }, [token]);
  return (
    <>
      <Container>
        <Title>Phonebook</Title>
        <Cabinet>
          <UserName>{email}</UserName>
          <But onClick={(e) => (e.preventDefault(), dispatch(logout(token)))}>
            Logout
          </But>
        </Cabinet>
      </Container>
      <AddForm />
      <SubTitle>Contacts</SubTitle>
      <FilterInput />
      <ContactList />
    </>
  );
};
