import React from 'react';
import styled from "styled-components";

const StyledButtonCategory = styled.button`
    position: relative;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    width: 100px;
    height: 100px;
    background: ${(props) => props.background};
    border-radius: 20px;
`;

function ButtonCategory ({categoryLogo, categoryName, isClicked, targetLink}) {
    var bgColor = "#A7D9FF";
    if (isClicked === "1") bgColor = "#4F7FDB";

    return (
        <StyledButtonCategory background={bgColor} href="/">
            <img src={categoryLogo} alt={categoryName} />
        </StyledButtonCategory>
    );
}

export default ButtonCategory;