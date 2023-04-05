import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import banner from "../assets/banner.png";
import SectionTop from "../components/SectionTop";
import SectionBottom from "../components/SectionBottom";
import Footer from "../components/Footer";

const Wrapper = styled.div`
    width: 100%;
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
            <Banner src={banner}/>
            <SectionTop/>
            <SectionBottom/>
            <Footer/>
        </Wrapper>
    )
}

export default Home;