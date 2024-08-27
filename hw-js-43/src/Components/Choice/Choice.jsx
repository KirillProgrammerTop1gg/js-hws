import styled from 'styled-components';

const Text = styled.h1`
    text-align: center;
    font-size: 36px;
`;

export default ({ label }) => <>
    <Text>Choice: {label !== '' ? label : 'nothing'}</Text>
</>