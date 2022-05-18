import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import WalletsGrp from './components/wallets/index';
// import Frist from "./components/Frist/index";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Frist/>} /> */}
        <Route path="/" element={<Home/>} />
        {/* <Route path="/home" element={<Home/>} /> */}
        <Route path="/wallets" element={<WalletsGrp/>} />
      </Routes>
    </>
  );
}

export default App;
