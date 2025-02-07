import styled from "styled-components";
import { addContact } from "../../redux/contacts/action";
import { useSelector, useDispatch } from "react-redux";

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
    const dispatch = useDispatch();
    return (
        <Form onSubmit={(e) => (e.preventDefault(), dispatch(addContact({name: e.target.name.value, number: e.target.number.value})))}>
            <Label>Name</Label>
            <Input
                type="text"
                name="name"
                required
            />
            <Label>Number</Label>
            <Input
                type="tel"
                name="number"
                pattern="\+?[1-9]\d{1,14}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <AddForm>Add contact</AddForm>
        </Form>
    );
}