import styled from "styled-components";

const TextArea = styled.textarea`
    border: 1px solid ${props => props.theme.DarkCyan};
    box-sizing: border-box;
    display; block;
    font-size: 0.9rem;
    padding: 0.5rem;
    resize: vertical;
    width: 100%;
`;

export default TextArea;