import styled from "styled-components";

const Button = styled.button`
    display: block;
    width: 80px;
    height: 25px;
    border-radius: 5px;
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

export default ({ updateContact }) => <>
    <Button onClick={e => updateContact()}>Update</Button>
</>