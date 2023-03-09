import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChannelCart from "../Feed/ChannelCart";
import { Videos } from "../Feed/Videos";
import { fetchFromAPI } from "../../utils/fetchFromApi";
import { Loader } from "../../Loader";
import "./channelDetail.css";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  // console.log(channelDetail, videos);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  if (!channelDetail?.snippet) return <Loader />;

  return (
    <div className="channelDetail">
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(18,165,200,1) 21%, rgba(29,161,150,1) 62%)",
          height: "260px",
        }}
      />
      <div className="channel">
        <div className="channel-1">
          <ChannelCart channelDetail={channelDetail} marginTop="-100px" />
        </div>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default ChannelDetail;
