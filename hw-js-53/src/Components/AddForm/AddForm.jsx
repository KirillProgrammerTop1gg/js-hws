import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsApi";
import { selectFoundContacts } from "../../redux/selectors";

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin: 24px 16px;
`;

const Field = styled.div`
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #555;
  margin-bottom: 4px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    border-color: #4caf50;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  flex: 0 0 auto;
  align-self: flex-end;
  padding: 10px 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s;

  &:hover {
    background-color: #43a047;
  }
`;

export default () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const contacts = useSelector(selectFoundContacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = e.target;
    const newName = name.value.trim();
    if (contacts.some((c) => c.name.toLowerCase() === newName.toLowerCase())) {
      alert("Contact already exists");
      return;
    }
    dispatch(addContact([token, { name: newName, number: number.value }, contacts]));
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" type="text" required />
      </Field>
      <Field>
        <Label htmlFor="number">Number</Label>
        <Input
          id="number"
          name="number"
          type="tel"
          pattern="\+?[1-9]\d{1,14}"
          title="Phone number must be digits and can start with +"
          required
        />
      </Field>
      <SubmitButton type="submit">Add Contact</SubmitButton>
    </Form>
  );
};