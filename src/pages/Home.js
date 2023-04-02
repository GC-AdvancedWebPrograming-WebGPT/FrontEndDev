import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import banner from "../assets/banner.png";
import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
    width: 100%;
    height: 1000px;
`;

const Banner = styled.img`
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

function Home(){
    return(
        <Wrapper>
            <Header/> 
            <Navigator/>
            <Outlet/>
            <Banner src={banner}/>
        </Wrapper>
    )
}

export default Home;