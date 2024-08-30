import styled from "styled-components";

const Text = styled.p`
    text-align: left;
    font-size: 20px;
    margin-top: 5px;
`;
const Search = styled.input`
    display: block;
    margin-top: 10px;
    width: 200px;
    height: 30px;
    border-radius: 10px;
`;

export default ({ writeFilter }) => <>
    <Text>Find contacts by name</Text>
    <Search name="filter" onInput={(e) => writeFilter()} />
</>