import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./screens/About";

import Feed from "./screens/Feed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/about/:id" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
