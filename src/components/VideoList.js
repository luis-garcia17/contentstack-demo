import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos = videos.map((video) => {
        return <VideoItem key={video.id} video={video} handleVideoSelect={handleVideoSelect} />
    })//.sort((a,b) => Date.now(b.props.video.snippet.publishedAt) - Date.now(a.props.video.snippet.publishedAt));

    return <div>{renderedVideos}</div>;
};

export default VideoList;