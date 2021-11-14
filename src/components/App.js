import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../Hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideos] = useState(null);
  const [videos, search] = useVideos('building');

  useEffect(() => {
    setSelectedVideos(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column    ">
            <VideoList videos={videos} onSelectVideo={setSelectedVideos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
