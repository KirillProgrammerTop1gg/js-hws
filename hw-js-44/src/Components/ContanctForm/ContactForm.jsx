import styled from "styled-components";

const AddContactForm = styled.form`
    margin-top: 20px;
    border: 3px black solid;
    padding: 10px;
    border-radius: 10px;
`;
const Label = styled.label`
    display: block;
    text-align: left;
    margin-top: 10px;
    font-size: 22px;
`;
const Input = styled.input`
    display: block;
    margin-top: 5px;
    width: 180px;
    height: 30px;
    padding: 5px;
    border-radius: 10px;
`;
const AddContactBut = styled.button`
    display: block;
    margin-top: 10px;
    width: 180px;
    height: 30px;
    border-radius: 10px;
    transition: all .3s;
    &:hover{
        background-color: #828385;
        color: #fff;
    }
    &:active{
        background-color: #696a6b;
        color: #fff;
    }
`;

export default ({ setName, setNumber, addContact, children }) => (
    <>
        <AddContactForm onSubmit={(e) => (e.preventDefault(), addContact())}>
            {children}
            <Label>Name</Label>
            <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+((['\-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onInput={(e) => setName(e.target.value)}
                required
            />
            <Label>Number</Label>
            <Input
                type="tel"
                name="number"
                pattern="\+?[1-9]\d{1,14}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                onInput={(e) => setNumber(e.target.value)}
                required
            />
            <AddContactBut>Add contact</AddContactBut>
        </AddContactForm>
    </>
);
