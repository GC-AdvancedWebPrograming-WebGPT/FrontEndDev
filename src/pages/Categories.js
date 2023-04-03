import React from "react";
import ButtonCategory from "../components/ButtonCategory";
import * as imgs from "../assets/category_shapes/index";

const Categories = () =>{
    return(
        <div>
            <h2>Categories</h2>
            <ButtonCategory toLink="/condition" imgSrc={imgs.Cheers} bgColor="#A7D9FF" tagName="뼈"/>
        </div>
    );
}
export default Categories;