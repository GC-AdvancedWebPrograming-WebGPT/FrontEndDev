import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Wrapper = styled.div`
    width: 100%;
    height: 200px;
`;

const StyledHeader = styled.header`
    display: block;
    width: 100%;
    padding: 50px 50px 50px 50px;
`

const Logo = styled.img`
    width= 50;
    height= 50;
`;
const Header = () => {
    return(
        <Wrapper>
            <StyledHeader>
                <Logo src={logo}/>
            </StyledHeader>
        </Wrapper>
    );
}

export default Header;