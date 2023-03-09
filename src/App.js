import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Feed from "./components/Feed/Feed";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import ChannelDetail from "./components/ChannelDetail/ChannelDetail";
import SearchFeed from "./components/SearchFeed/SearchFeed";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const togglebar = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar togglebar={togglebar} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Feed
                toggle={toggle}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            }
          />
          <Route
            path="/video/:id"
            element={
              <VideoDetail
                toggle={toggle}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            }
          />
          <Route
            path="/channel/:id"
            element={
              <ChannelDetail
                toggle={toggle}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            }
          />
          <Route
            path="/search/:searchTerm"
            element={
              <SearchFeed
                toggle={toggle}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
