import styled from 'styled-components'

const Section = styled.section`
    padding: 15px;
`;

const Title = styled.h1`
    font-size: 32px;
    text-align: left;
`;

export default ({ title, children }) => <>
    <Section>
        <Title>{title}</Title>
        {children}
    </Section>
</>