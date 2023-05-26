import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import banner from "../assets/banner.png";
import SectionTop from "../components/SectionTop";
import ChooseCategory from "../components/ChooseCategory";
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

function Home() {
  const categoryID = useSelector((state) => state.category.categoryID);

  return (
    <Wrapper>
      <Header />
      <Navigator />
      <Banner src={banner} />
      <SectionTop />
      <ChooseCategory selectedCategory={categoryID} />
      <SectionBottom />
      <Footer />
    </Wrapper>
  );
}

export default Home;