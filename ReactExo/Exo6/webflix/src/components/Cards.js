import Carde from "./Card";

import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CardList({ inputValue }) {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
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
