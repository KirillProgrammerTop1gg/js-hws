import { useContext, useRef } from "react";
import { PhoneContext } from "../Phone/Phone";
import styled from "styled-components";

const Label = styled.h3`
    font-weight: 400;
    margin-top: 15px;
    font-size: 22px;
`;
const Input = styled.input`
    margin-top: 5px;
    border-radius: 5px;
    padding: 5px;
`;

export default () => {
const { setFilterFunc } = useContext(PhoneContext);
const input = useRef(null);
return <>
    <Label>
        Find contacts by name
    </Label>
    <Input type="text" ref={input} onInput={(e) => (input.current.focus(),setFilterFunc(input.current.value))}/>
</>
}