import Carde from "./Card";

import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function CardList({ inputValue }) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "background.paper",
          flexWrap: "wrap",
        }}
      >
        {movies
          .filter((dt) => dt.title.match(new RegExp(inputValue, "i")))
          .map((dt) => {
            return (
              <Carde
                key={dt.id}
                title={dt.title}
                id={dt.id}
                img={dt.poster_path}
                details={dt.overview}
              />
            );
          })}
      </Box>
    </>
  );
}
