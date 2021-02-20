import styled from "styled-components";

const TextInput = styled.input`
    box-sizing: border-box;
    display: block;
    font-size: 0.9rem;
    padding: 0.25rem;
    width: 100%;
    border: 1px, solid, ${props => props.theme.PacificBlue};
`;

export default TextInput;