import React from "react";
import { Link } from "react-router-dom";
import "./feed.css";
import {
  demoVideoTitle,
  demoVideoUrl,
  demoThumbnailUrl,
  demoChannelTitle,
  demoChannelUrl,
} from "../../utils/sidebarData";

const VideoCart = (props) => {
  const { video } = props;
  const {
    id,
    snippet,
    snippet: {
      thumbnails: { medium },
    },
  } = video;
  // console.log(video);

  return (
    <div className="cart">
      <Link to={id.videoId ? `/video/${id.videoId}` : ``}>
        <img src={medium.url || demoThumbnailUrl} alt="" />
      </Link>
      <div className="text">
        <Link to={id.videoId ? `/video/${id.videoId}` : demoVideoUrl}>
          <h5>{snippet.title.slice(0, 30) || demoVideoTitle.slice(0, 30)}</h5>
        </Link>
        <Link
          to={
            snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl
          }
        >
          <h6>{snippet.channelTitle || demoChannelTitle}</h6>
          <span>
            <i className="fa-solid fa-circle-check"></i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default VideoCart;
