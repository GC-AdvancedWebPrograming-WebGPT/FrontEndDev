import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Conditions from "./pages/Conditions";
import MyPage from "./pages/MyPage";
import ChooseDetail from "./pages/ChooseDetail";
function App() {
  return (

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route index element={<Home/>}/>
      <Route path="categories" element={<Categories/>}/>
      <Route path="conditions" element={<Conditions/>}/>
      <Route path="mypage" element={<MyPage/>}/>
      <Route path="choosedetail" element={<ChooseDetail/>}/>
    </Routes>
  );
}

export default App;
