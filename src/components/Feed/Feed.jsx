import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./feed.css";
import { Videos } from "./Videos";
import { fetchFromAPI } from "../../utils/fetchFromApi";

const Feed = ({ toggle, selectedCategory, setSelectedCategory }) => {
  const [videos, SetVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      SetVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <>
      <div id="feed">
        <div className={toggle ? "disable" : "sidebar"}>
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className="foot">Copytight @ 2023 Youtube Clone</div>
        </div>
        <div className="videos">
          <h4>
            {selectedCategory}
            <span style={{ color: "red", fontWeight: "600", fontSize: "25px" }}>
              videos
            </span>
          </h4>
          <Videos videos={videos} />
        </div>
      </div>
    </>
  );
};

export default Feed;
