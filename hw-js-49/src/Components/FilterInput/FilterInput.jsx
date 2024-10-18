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

export default ({setFilter}) => 
<>
    <Label>
        Find contacts by name
    </Label>
    <Input type="text" onInput={(e) => setFilter(e.target.value)}/>
</>