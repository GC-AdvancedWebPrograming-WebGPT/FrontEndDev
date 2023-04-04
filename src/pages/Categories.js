import React from "react";
import ButtonCategory from "../components/ButtonCategory";
import NutrientsInfo from "../components/NutrientsInfo";
import * as imgs from "../assets/category_shapes/index";

const Categories = () =>{
    return(
        <div>
            <h2>Categories</h2>
            <ButtonCategory toLink="/conditions" imgSrc={imgs.Cheers} bgColor="#A7D9FF" tagName="뼈"/>
            <NutrientsInfo toLink="/conditions" imgSrc={imgs.Bone} itemName="Some" itemCompany="Those" />
        </div>
    );
}
export default Categories;