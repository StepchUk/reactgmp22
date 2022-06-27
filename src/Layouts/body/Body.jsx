import React, { useEffect, useState } from "react";
import GenreFilter from "../../Components/UI/genreFilter/GenreFilter";
import ResultSort from "../../Components/UI/resultSort/ResultSort";
import VideosList from "../../Components/VideosList";

const getVideoSorter = (field) => (a, b) => a[field].localeCompare(b[field]);

const Body = ({ videos, setVideos, handleVideoClick, showEditVideoModal, showDeleteModal }) => {

  const [sortByField, setSortByField] = useState('');

  useEffect(() => {
    const videoSorter = getVideoSorter(sortByField);

    setVideos([...videos].sort(videoSorter));
  }, [sortByField]);

  const sortVideos = (sort) => {
    setSortByField(sort);
  };

  return(
    <>
      <main className="main">
        <section className="container">
          <div className="sort">
            <GenreFilter />
            <ResultSort 
              value={sortByField}
              onChange={sortVideos}
            />
          </div>
        </section>
        <VideosList
          videos={videos}
          showEditVideoModal={showEditVideoModal}
          showDeleteModal={showDeleteModal}
          handleVideoClick={handleVideoClick}
        />
      </main>
    </>
  )
}

export default Body;
