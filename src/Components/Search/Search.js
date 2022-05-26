import React from "react";
import classes from "./Search.module.css"

class Search extends React.Component {
  render() {
    return(
      <div className={classes.search}>
        <div className={classes.search__head}>FIND YOUR MOVIE</div>
        <input placeholder="What do you want to watch?"/>
        <button>SEARCH</button>
      </div>
    )
  }
}

export default Search
