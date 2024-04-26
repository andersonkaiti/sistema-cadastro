import styled from "styled-components";

export const InputBox = styled.div`
    width: 100%;
    margin: 1em 0;
    padding: .2em 0;
    position: relative;
`;

export const InputUser = styled.input.attrs(props => ({
    type: "text",
    id: props.id,
    required: true,
    
}))`
    
`;