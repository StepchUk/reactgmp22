import React from "react"
import GenreFilter from "../../Components/UI/genreFilter/GenreFilter"
import ResultSort from "../../Components/UI/resultSort/ResultSort"
import VideosList from "../../Components/VideosList"

const Boody = () => {
  return(
    <main className="main">
      <section className="container">
        <div className="sort">
          <GenreFilter />
          <ResultSort />
        </div>
      </section>
      <VideosList />
    </main>
  )
}

export default Boody
