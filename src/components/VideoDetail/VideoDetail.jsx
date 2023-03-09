import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./videodetail.css";
import { fetchFromAPI } from "../../utils/fetchFromApi";
import ReactPlayer from "react-player";
import { Loader } from "../../Loader";
import { Videos } from "../Feed/Videos";
// import Sidebar from "../Feed/Sidebar";

export const VideoDetail = ({
  toggle,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [videoDetails, setvideoDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setvideoDetails(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  //Loader if snippet value not redered
  if (!videoDetails?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  // if (!videos?.snippet) return <Loader />;
  return (
    <div className="VideoDetail">
      {/* <div className={toggle ? "disable" : "sidebar"}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="foot">Copytight @ 2023 Youtube Clone</div>
      </div> */}
      <div className="videowrap">
        <div className="video">
          <ReactPlayer
            width={"100%"}
            height={"500px"}
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          <h3>{title}</h3>
          <div className="channeldetails">
            <Link to={`/channel/${channelId}`}>
              <h5>{channelTitle}</h5>
              <span>
                <i className="fa-solid fa-circle-check"></i>
              </span>
            </Link>
            <div className="statistic">
              <span>
                <button>{parseInt(viewCount).toLocaleString()} views</button>
              </span>
              <span>
                <button>
                  <i class="fa-solid fa-thumbs-up"></i>
                  {parseInt(likeCount).toLocaleString()}
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="videorecommend">{<Videos videos={videos} />}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
