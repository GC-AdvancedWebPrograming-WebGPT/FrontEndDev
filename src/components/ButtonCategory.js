import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

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

const Img = styled.img`
    position: absolute;
    left: 31%;
    right: 30%;
    top: 20%;
    bottom: 20%;
`

function ButtonCategory ({toLink, imgSrc, bgColor}) {
    //bgColor = "#A7D9FF";
    //bgColor = "#4F7FDB";

    return (
        <Link to={toLink}>
            <StyledButtonCategory background={bgColor}>
                <Img src={imgSrc} alt="category" />
            </StyledButtonCategory>
        </Link>
    );
}

export default ButtonCategory;