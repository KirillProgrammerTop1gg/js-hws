import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Header = styled.header`
    background-color: #fff;
    width: 100%;
    z-index: 1000;
    position: fixed;
    top: 0;
    padding: 15px 0 15px 20px;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
    font-size: 25px;
`;
const NavLink = styled.nav`
    display: flex;
    gap: 20px;
    align-items: center;
    &>a{
        text-decoration: none;
        color: #000;
        transition: all .3s;
        &:hover{
            color: #f5331d;
            transition: all .3s;
        }
    }
`;

export default () => {
    return (
    <Header>
        <NavLink>
            <Link to="/" style={{ color: useLocation().pathname === '/' ? '#f26b5c' : '#000' }}>
                Home
            </Link>
            <Link to="/movies" style={{ color: useLocation().pathname.startsWith('/movies') ? '#f26b5c' : '#000' }}>
                Movies
            </Link>
        </NavLink>
    </Header>);
}