import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Conditions from "./pages/Conditions";
import MyPage from "./pages/MyPage";
import Detail from "./pages/Detail";
import data from "./data.js"

function App() {
  const [nutrients, setNutrients] = useState(data);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route index element={<Home/>}/>
      <Route path="categories" element={<Categories/>}/>
      <Route path="conditions" element={<Conditions/>}/>
      <Route path="mypage" element={<MyPage/>}/>
      <Route path="detail/:id" element={<Detail nutrients={ nutrients }/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
