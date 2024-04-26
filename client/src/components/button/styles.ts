import styled from "styled-components";

export const ButtonContainer = styled.input.attrs(props => ({
    type: "submit",
    value: props.value
}))`
    width: 100%;
    padding: 1em;
    background-color: #414141;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
    border-radius: .5em;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.1em;

    &.hover {
        transition: .5s;
        background-color: #000000;
    }
`;