import styled from "styled-components";

const Gifs = styled.ul`
    margin-top: 100px;
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 0 30px;
    justify-content: center;
    flex-wrap: wrap;
`;
const Gif = styled.li`
    &>img{
        width: 480px;
        height: 270px;
        object-fit: cover;
        box-shadow: 0px 0px 3px 3px rgba(0,0,0,0.2);
    }
`;

export default ({gifs}) => <Gifs>
    {gifs.map(gif => <Gif id={`${gif.id}${Math.floor(Math.random()*999999)}`}>
        <img src={gif.images.downsized.url}/>
    </Gif>)}
</Gifs>