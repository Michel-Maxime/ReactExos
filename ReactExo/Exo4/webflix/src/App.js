import { Button } from "@mui/material";
import { createContext, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./screens/About";

import Feed from "./screens/Feed";
import Fav from "./screens/Fav";

export const FavContext = createContext();

function App() {
  const [fav, setFav] = useState([]);
  return (
    <FavContext.Provider value={{ setFav, fav }}>
      <h1>my favs {fav.length}</h1>
      <BrowserRouter>
        <Button size="small" component={Link} to={`/fav`}>
          Go to favoris
        </Button>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/fav" element={<Fav />} />
        </Routes>
      </BrowserRouter>
    </FavContext.Provider>
  );
}

export default App;
