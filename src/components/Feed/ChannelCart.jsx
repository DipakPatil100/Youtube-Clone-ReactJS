import React from "react";
import "./feed.css";
import { demoProfilePicture } from "../../utils/sidebarData";
import { Link } from "react-router-dom";

const ChannelCart = ({ channelDetail, marginTop }) => {
  // console.log(channelDetail);
  return (
    <div style={{ marginTop: marginTop }} className="channelcart">
      <Link to={`/channel/${channelDetail.id.channelId}`}>
        <img
          src={channelDetail.snippet.thumbnails.high.url || demoProfilePicture}
          alt=""
        />
        <h6>
          {channelDetail.snippet.title}{" "}
          <span>
            <i className="fa-solid fa-circle-check"></i>
          </span>
        </h6>
        {/* <button>Subscribe</button> */}
        {channelDetail?.statistics?.subscriberCount && (
          <span>
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString()}
            <span> Subscribers</span>
          </span>
        )}
      </Link>
    </div>
  );
};

export default ChannelCart;
