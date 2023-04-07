import React from "react";
import ChooseCategory from "../components/ChooseCategory";
import NutrientsInfo from "../components/NutrientsInfo";
import { Bone } from "../assets/category_shapes";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import styled from "styled-components";
import Footer from "../components/Footer";


const Wrapper = styled.div`
    width: 100%;
`;

function Categories() {
    return(
        <Wrapper>
            <Header/>
            <Navigator/>
            <ChooseCategory selectedCategory="0" />
            <NutrientsInfo toLink="" imgSrc={Bone} itemName="123123" itemCompany="123" />
            <Footer/> 
        </Wrapper>
    );
}
export default Categories;