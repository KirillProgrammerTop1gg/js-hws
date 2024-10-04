import styled from "styled-components";

const Button = styled.button`
    margin: 20px auto;
    width: 150px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 15px;
    background-color: #a54af0;
    color: #fff;
    font-size: 22px;
`;

export default ({ loadFunc }) =>
<Button onClick={(e) => loadFunc()}>Load more</Button>