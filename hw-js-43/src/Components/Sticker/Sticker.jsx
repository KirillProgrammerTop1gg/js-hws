import styled from 'styled-components';

const Sticker = styled.li``;

const StickerBut = styled.button`
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 2px solid #6b6b69;
    transition: all 0.3s;
    cursor: pointer;
    &:hover{
        border: 2px solid #3d3d3d;
        background-color: #a8a7a3;
    }
    &:active{
        background-color: #6e6d6a;
        border: 2px solid #2e2e2d;
    }
`;

export default ({ img, func, id, label }) => <>
    <Sticker key={id}>
        <StickerBut onClick={() => func()}>
            <img src={img} alt={label} />
        </StickerBut>
    </Sticker>
</>