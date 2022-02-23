import Carde from "../components/Card";

import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { FavContext } from "../App";

export default function Fav() {
  const { fav } = useContext(FavContext);
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
          .filter((dt) => fav.includes(dt.id))
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
