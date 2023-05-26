import React from "react";
import ChooseCategory from "../components/ChooseCategory";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import styled from "styled-components";
import Footer from "../components/Footer";
import NutrientsData from "../components/NutrientsData";
import { useSelector, useDispatch } from "react-redux";
import { changeCategory } from "../store/actions/changeCategory";

const Wrapper = styled.div`
  width: 100%;
`;

function Categories() {
  const categoryID = useSelector((state) => state.category.categoryID);
  const dispatch = useDispatch();

  const handleCategoryChange = (categoryID) => {
    dispatch(changeCategory(categoryID));
  };

  return (
    <Wrapper>
      <Header />
      <Navigator />
      <ChooseCategory
        selectedCategory={categoryID}
        onCategoryChange={handleCategoryChange}
      />
      <NutrientsData type={categoryID} />
      <Footer />
    </Wrapper>
  );
}

export default Categories;