import React from 'react';

const VideoList = ({ video, onSelectVideo }) => {
  return (
    <div onClick={() => onSelectVideo(video)} className="item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoList;
