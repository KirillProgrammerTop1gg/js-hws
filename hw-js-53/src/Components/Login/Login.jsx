import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { login } from "../../redux/authApi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fixError } from "../../redux/authSlice";

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

const Msg = styled.div`
  color: #e60b33;
  font-weight: 500;
  margin-bottom: 20px;
  width: 220px;
  font-size: 18px;
  text-align: center;
`;

export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector((state) => state.auth.token);
  const err = useSelector((state) => state.auth.err);
  useEffect(() => {
    if (token != '') navigate("/js-hws/hw-js-53/build/contacts", { replace: true });
    if (err) {
      document.querySelector('#msg').innerHTML = `Помилка в логіні! Спробуйте ще раз або ви ще не зареєстровані!`;
      document.querySelector('#email').value = '';
      document.querySelector('#password').value = '';
      dispatch(fixError());
    }
  }, [token,err]);

  const submit = (e) => {
    e.preventDefault();
    dispatch(login({ email: document.querySelector('#email').value, password: document.querySelector('#password').value }));
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Вход</Title>
        <Msg id="msg"></Msg>
        <Form onSubmit={submit}>
          <Input
            type="email"
            placeholder="Email"
            id="email"
            required
          />
          <Input
            type="password"
            placeholder="Пароль"
            id="password"
            required
          />
          <Button type="submit">Логін</Button>
        </Form>
        <ExtraLinks>
          <div>
            Немає аккаунту? <Link to="/js-hws/hw-js-53/build/register">Зареєструйтесь</Link>
          </div>
          <div>
            Повернутися <Link to="/js-hws/hw-js-53/build">на головну сторінку</Link>
          </div>
        </ExtraLinks>
      </FormWrapper>
    </Container>
  );
};