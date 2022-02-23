import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardList from "../components/Cards";

export default function About() {
  const [value, setValue] = useState("");
  const [params, setParams] = useSearchParams();

  const onChange = (event) => {
    setValue(event.target.value);
    setParams(`film=${event.target.value}`);
  };

  useEffect(() => {
    setValue(params.get("film") || "");
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <TextField
          id="outlined-basic"
          label="Film search"
          value={value}
          onChange={onChange}
          variant="outlined"
          margin="normal"
        />
      </div>
      <CardList inputValue={value} />
    </>
  );
}
