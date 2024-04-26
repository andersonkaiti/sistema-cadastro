import styled from "styled-components";
import Link from "next/link";

export const HeaderContainer = styled.header`
    background-color: transparent;
    padding: 2em 4em;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1em;
    font-size: 1.2em;
`;

export const NavLink = styled(Link)`
    color: #000;
    text-decoration: none;
    font-weight: bold;

    &.active {
        color: #0077ff;
    }
`;