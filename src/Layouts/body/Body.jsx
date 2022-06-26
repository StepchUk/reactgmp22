import React, { useEffect, useState } from "react";
import GenreFilter from "../../Components/UI/genreFilter/GenreFilter";
import ResultSort from "../../Components/UI/resultSort/ResultSort";
import VideosList from "../../Components/VideosList";

const getVideoSorter = (field) => (a, b) => a[field].localeCompare(b[field]);

const Body = ({ videos, setVideos, videoDetail, showEditVideoModal, showDeleteModal }) => {

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
          videoDetail={videoDetail}
        />
      </main>
    </>
  )
}

export default Body;
