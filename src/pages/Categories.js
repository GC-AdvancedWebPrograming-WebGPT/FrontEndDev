import React, { useState, createContext } from "react";
import ChooseCategory from "../components/ChooseCategory";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import styled from "styled-components";
import Footer from "../components/Footer";

import NutrientsData from "../components/NutrientsData";

const Wrapper = styled.div`
    width: 100%;
`

export const AppContext = createContext();

function Categories() {
    const [categoryID, setCategoryID] = useState("1");
    const changeCategory = (newID) => {
        setCategoryID(newID);
    }
    
    return(
        <Wrapper>
            <Header/>
            <Navigator/>
                <AppContext.Provider value={{ categoryID, changeCategory }}>
                    <ChooseCategory selectedCategory={categoryID} />
                    <NutrientsData type={categoryID} />
                </AppContext.Provider>
            <Footer/> 
        </Wrapper>
    );
}
export default Categories;