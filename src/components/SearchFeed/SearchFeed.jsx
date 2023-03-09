import { useState, useEffect } from "react";
import "./searchfeed.css";
import { useParams } from "react-router-dom";
import { Videos } from "../Feed/Videos";
import { fetchFromAPI } from "../../utils/fetchFromApi";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  console.log(videos);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data?.items)
    );
  }, [searchTerm]);

  // console.log(videos);

  return (
    <div className="searchFeed">
      <h2>
        Search Result for: <span>{searchTerm}</span> videos
      </h2>
      <div>{<Videos videos={videos} />}</div>
    </div>
  );
};

export default SearchFeed;
