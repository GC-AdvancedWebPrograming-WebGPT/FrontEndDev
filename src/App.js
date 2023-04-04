import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Conditions from "./pages/Conditions";
import MyPage from "./pages/MyPage";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route index element={<Home/>}/>
      <Route path="categories" element={<Categories/>}/>
      <Route path="conditions" element={<Conditions/>}/>
      <Route path="mypage" element={<MyPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
