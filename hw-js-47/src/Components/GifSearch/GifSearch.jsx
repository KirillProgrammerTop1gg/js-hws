import styled from "styled-components";

const Header = styled.header`
    position: fixed;
    top: 0;
    background-color: #bd82ed;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`;
const Search = styled.input`
    width: 480px;
    height: 50px;
    border-radius: 10px;
    padding: 10px;
    font-size: 18px;
`;

export default ({ changeSearch }) =>
<Header>
    <Search placeholder="Введіть запит на пошук гіфки" type="text" onChange={(e) => changeSearch(e.target.value)} />
</Header>