import Carde from "../components/Card";

import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Favorite() {
  const favoriteIds = useSelector((state) => state.ids);
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

  useEffect(() => {
    console.log(favoriteIds);
  }, [favoriteIds]);

  return (
    <>
      <h1>Mes favoris</h1>
      <Button size="small" component={Link} to={`/`}>
        Go to feed
      </Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "background.paper",
          flexWrap: "wrap",
        }}
      >
        {movies
          .filter((dt) => favoriteIds.includes(dt.id))
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
