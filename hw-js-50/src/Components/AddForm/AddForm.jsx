import { useContext, useRef } from "react";
import styled from "styled-components";
import { PhoneContext } from "../Phone/Phone";

const Form = styled.form`
    padding: 10px;
    margin-top: 20px;
    border: 1px solid #000;
`;

const Label = styled.h3`
    font-weight: 400;
    margin-bottom: 5px;
`;

const Input = styled.input`
    margin-bottom: 15px;
    border-radius: 5px;
    padding: 5px;
`;

const AddForm = styled.button`
    display: block;
    padding: 5px;
    border-radius: 5px;
`;

export default () => {
const { setNameFunc, setNumberFunc, addContactFunc } = useContext(PhoneContext);
const name = useRef(null);
const number = useRef(null);
return <Form onSubmit={(e) => (e.preventDefault(), addContactFunc(e))}>
    <Label>Name</Label>
    <Input
        type="text"
        name="name"
        ref={name}
        onInput={(e) => setNameFunc(name.current.value)}
        required
    />
    <Label>Number</Label>
    <Input
        type="tel"
        name="number"
        pattern="\+?[1-9]\d{1,14}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        ref={number}
        onInput={(e) => setNumberFunc(number.current.value)}
        required
    />
    <AddForm>Add contact</AddForm>
</Form>
}