import React from "react";
import ChooseCategory from "../components/ChooseCategory";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import styled from "styled-components";
import Footer from "../components/Footer";

import NutrientsData from "../components/NutrientsData";

const Wrapper = styled.div`
    width: 100%;
`

function Categories() {
    
    return(
        <Wrapper>
            <Header/>
            <Navigator/>
            <ChooseCategory selectedCategory="0" />
            <NutrientsData type="1" />
            <Footer/> 
        </Wrapper>
    );
}
export default Categories;