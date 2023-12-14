// https://www.youtube.com/watch?v=uEAbnPizsdo
// Fixing a bug in installing packages:
// npm config set legacy-peer-deps true
// installing packages:
// npm i styled-components @types/styled-components

import styled from "styled-components";

const radius = Math.floor(Math.random() * 20) + 5;

const StyledButton = styled.button `
    padding: 10px;
    margin: 5px;
    border-radius: ${radius}px;
    box-shadow: 3px 3px 5px gray;
    color: ${attrs => attrs.disabled ? "gray" : "white"};
    background-image: linear-gradient(gray, black);
    ${attrs => attrs.disabled ? "" : ":hover { background-image: linear-gradient(black, gray); }"}
`;

export default StyledButton;
