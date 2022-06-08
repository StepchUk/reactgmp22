import React from "react"
import GenreFilter from "../../Components/UI/genreFilter/GenreFilter"
import ResultSort from "../../Components/UI/resultSort/ResultSort"
import VideosList from "../../Components/VideosList"

const Body = ({ videos, remove }) => {
  return(
    <main className="main">
      <section className="container">
        <div className="sort">
          <GenreFilter />
          <ResultSort />
        </div>
      </section>
      <VideosList videos={videos} removeVideo={remove} />
    </main>
  )
}

export default Body
