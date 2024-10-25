import styled from 'styled-components';

const Msg = styled.p`
    font-size: 22px;
    margin-top: 15px;
    text-align: left;
`

export default ({ message }) => <>
    <Msg>{message}</Msg>
</>