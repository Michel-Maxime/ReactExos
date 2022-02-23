import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import About from "./screens/About";
import Feed from "./screens/Feed";
import Favorite from "./screens/Favorite";
import { useEffect } from "react";
import { Button } from "@mui/material";

function App() {
  const favoriteIds = useSelector((state) => state.ids);

  return (
    <BrowserRouter>
      <h1>number of favorites : {favoriteIds.length}</h1>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
