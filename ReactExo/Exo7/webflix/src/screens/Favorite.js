import Carde from "../components/Card";

import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Favorite() {
  const dispatch = useDispatch();

  const favoriteIds = useSelector((state) => state.favorites.ids);
  const movies = useSelector((state) => state.favorites.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_FAVORITES" });
  }, []);

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
