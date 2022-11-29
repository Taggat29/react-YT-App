import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList/VideoList";
import VideoDets from "./components/VideoDets";
import useVideos from "./components/Hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('React');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  },[videos])

  return (
    <div>
      <h1 className="ui container">Youtube API Researcher</h1>
      <div className="ui container">
        <SearchBar onFormSubmit={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDets video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={videos}
                onVideoSelect={setSelectedVideo}
                // UGUALE A: 
                /* onVideoSelect={(video) => setSelectedVideo(video)} */
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
