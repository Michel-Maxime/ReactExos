import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import data from "../data/data.json";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

const url = "https://image.tmdb.org/t/p/original";

export default function About() {
  const [filmInfo, setFilmInfo] = useState({});
  const params = useParams();

  useEffect(() => {
    setFilmInfo(data.movies.find((dt) => dt.id.toString() === params.id));
  }, [params]);

  useEffect(() => {
    //console.log(filmInfo.genre);
  }, [filmInfo]);

  return (
    <>
      <Button
        size="small"
        style={{ position: "absolute", color: "white" }}
        component={Link}
        to={`/`}
      >
        <ArrowBackIcon />
      </Button>
      <CardMedia
        component="img"
        alt="film picture"
        height="300"
        image={url + filmInfo.poster_path}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {filmInfo.title} ⭐⭐⭐☆☆
        </Typography>
        <Typography variant="body5" component={"div"}>
          made in {filmInfo.release_date}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          {filmInfo.overview}
        </Typography>
        <br />
        <Typography variant="body5" component={"div"}>
          genre
        </Typography>
        <br />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {filmInfo.genre?.map((gr, index) => (
            <div
              key={index}
              style={{
                margin: 8,
                padding: 3,
                border: "2px solid black",
                backgroundColor: "silver",
              }}
            >
              {gr}
            </div>
          ))}
        </Box>
      </CardContent>
    </>
  );
}
