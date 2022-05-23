import React from "react";
import Hello from "./Components/Hello";
import Counter from "./Components/Counter"
import Search from "./Components/Search/Search";
import Genre from "./Components/Genre/Genre"
import { genresData } from "./Components/Genre/genresData";

function App() {
  return (
    <>
      <Hello />
      <Search />
      <Genre genres={genresData}/>
      <Counter />
    </>
  );
}

export default App;
