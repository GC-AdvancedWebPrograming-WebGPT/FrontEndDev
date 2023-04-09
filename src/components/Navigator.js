import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';


const Wrapper = styled.div`
    width: 100%;
    height: 50px;
`;

const StyledNavigator = styled.div`
    text-align: right;
    padding-right: 50px;
`;

const List = styled.ul`
    list-style: none;
`;

const Element = styled.li`
    float: right;
    margin-right: 20px;
    font-weight: bold;
`;

const Navigator = () => {
   return(
    <Wrapper>
        <StyledNavigator>
            <List>
                <Link to="/mypage"><Element>MYPAGE</Element></Link>
                <Link to ="/conditions"><Element>종류별</Element></Link>
                <Link to ="/categories"><Element>고민별</Element></Link>
                <Link to ="/"><Element>HOME</Element></Link>
            </List>
        </StyledNavigator>
    </Wrapper>
   );
}

export default Navigator;