import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { register } from "../../redux/authApi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const FormWrapper = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ExtraLinks = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #555;

  a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector((state) => state.auth.token);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (token != '') navigate("/contacts", { replace: true });
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({
      "name": name,
      "email": email,
      "password": password
    }));
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Реєстрація</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Зареєструватися</Button>
        </Form>
        <ExtraLinks>
          <div>
            Э аккаунту? <Link to="/login">Увійдіть</Link>
          </div>
          <div>
            Повернутися <Link to="/">на головну сторінку</Link>
          </div>
        </ExtraLinks>
      </FormWrapper>
    </Container>
  );
};
