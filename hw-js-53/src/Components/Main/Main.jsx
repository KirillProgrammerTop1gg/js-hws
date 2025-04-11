import styled from "styled-components";
import { Navigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f5f5f5;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  padding: 0;
  li {
    margin: 0;
  }
  a {
    cursor: pointer;
    background-color: #abc0d4;
    border-radius: 5px;
    padding: 5px;
    text-decoration: none;
    color: #007bff;
    transition: color 0.3s ease;
    &:hover {
      color: #0056b3;
    }
  }
`;

export default () => {
  const token = useSelector((state) => state.auth.token);
  return token ? (
    <Navigate to="/contacts" />
  ) : (
    <MainSection>
      <Title>Сайт де ви можете зберегти свої контакти</Title>
      <LinksContainer>
        <li>
          <Link to="/js-hws/hw-js-53/build/login">Логін</Link>
        </li>
        <li>
          <Link to="/js-hws/hw-js-53/build/register">Реєстрація</Link>
        </li>
      </LinksContainer>
    </MainSection>
  );
};
