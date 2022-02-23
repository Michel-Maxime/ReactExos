import Carde from "./Card";

import data from "../data/data.json";
import { Box } from "@mui/material";

export default function CardList({ inputValue }) {
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
        {data.movies
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
