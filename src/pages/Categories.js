import React from "react";
import ChooseCategory from "../components/ChooseCategory";
import NutrientsInfo from "../components/NutrientsInfo";
import { Bone } from "../assets/category_shapes";

const Categories = () =>{
    return(
        <div>
            <h2>Categories</h2>
            <ChooseCategory children="1" />
            <NutrientsInfo toLink="" imgSrc={Bone} itemName="123123" itemCompany="123" /> 
        </div>
    );
}
export default Categories;