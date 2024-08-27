import styled from 'styled-components';

const List = styled.ul`
    list-style: none;
    margin-top: 25px;
    gap: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export default ({ children }) => <>
    <List>
        {children}
    </List>
</>