import React from "react";
import classes from "./Genre.module.css"

class Genre extends React.PureComponent {
  render() {
    const genres = this.props.genres.map((item, index) => <li key={index}>{item}</li>)

    return (
      <div className={classes.genre}>
        <ul>
          {genres}
        </ul>
      </div>
    )
  }
}

export default Genre
