import React, { useState, useEffect } from "react";
import "./App.css";
import Display from "./Display";
import { Button, TextField } from "@material-ui/core";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [text, setText] = useState("chicken");

  useEffect(() => {
    const clean = fetchItem();
    return clean;
  }, [text]);

  const fetchItem = async () => {
    const data = await fetch(
      `https://api.edamam.com/search?q=${text}&app_id=62bf3cb0&app_key=b84509522cb723a4deb0ec981472d6d6`
    );
    const info = await data.json();
    setRecipe(info.hits);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    setText(search);
    setSearch("");
  };

  return (
    <div className="App">
      <div className="head">
        <h1>search a rec!pe</h1>
        <form>
          <TextField
            id="filled-basic"
            label="Topic"
            variant="filled"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Button onClick={clickHandler} type=" submit">
            search
          </Button>
        </form>
      </div>
      <div className="all">
        {recipe.map((rec) => (
          <Display
            key={rec.recipe.calories}
            pic={rec.recipe.image}
            name={rec.recipe.label}
            ingredients={rec.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
