import React from "react";
import "./feed.css";
import VideoCart from "./VideoCart";
import ChannelCart from "./ChannelCart";

export const Videos = (props) => {
  const { videos } = props;
  // console.log(videos);

  return (
    <>
      <div className="cart-wrap">
        {videos.map((item, index) => (
          <div key={index}>
            {item.id.videoId && <VideoCart video={item} />}
            {item.id.channelId && <ChannelCart channelDetail={item} />}
          </div>
        ))}
      </div>
    </>
  );
};
